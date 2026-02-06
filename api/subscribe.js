// Serverless function — works on Vercel out of the box.
// For Netlify, move to netlify/functions/subscribe.js and adjust the export format.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  // Honeypot check — if the hidden field has a value, it's a bot
  if (req.body._honey) {
    return res.status(200).json({ success: true })
  }

  const API_KEY = process.env.BEEHIIV_API_KEY
  const PUB_ID = process.env.BEEHIIV_PUBLICATION_ID

  if (!API_KEY || !PUB_ID) {
    console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'hero_signup',
        }),
      }
    )

    if (!response.ok) {
      const err = await response.json()
      console.error('Beehiiv API error:', err)
      return res.status(response.status).json({ error: 'Subscription failed' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
