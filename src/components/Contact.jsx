import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/mbdajgpp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setSending(false)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-lab-white lab-grid"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="specimen-label"
            >
              Section 04 — Make Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-2xl sm:text-4xl leading-[0.95] tracking-tight mt-6 mb-6"
            >
              INITIATE
              <br />
              <span className="text-accent">TRANSMISSION</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lab-graphite text-lg sm:text-xl leading-relaxed mb-4"
            >
              Got a question? A collaboration idea? An unsolicited opinion about
              our font choices? We're all ears.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-base text-lab-steel italic"
            >
              (We read every message. Even the weird ones. Especially the weird ones.)
            </motion.p>

            {/* Decorative lab data */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 border border-lab-fog p-6 hidden lg:block"
            >
              <span className="font-mono text-sm font-medium text-lab-steel tracking-[0.1em] uppercase block mb-4">
                Communication Protocol
              </span>
              <div className="space-y-2">
                {[
                  { label: 'Response Time', value: '< 48 hrs', status: 'green' },
                  { label: 'Friendliness', value: 'Maximum', status: 'green' },
                  { label: 'Corporate Jargon', value: '0.00%', status: 'green' },
                  { label: 'Meeple GIFs', value: 'Likely', status: 'amber' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-lab-fog/50 last:border-0">
                    <span className="font-mono text-sm font-medium text-lab-graphite">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-lab-ink font-medium">{row.value}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        row.status === 'green' ? 'bg-accent' : 'bg-s42-amber'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="border border-lab-fog bg-white p-8 lg:p-10">
                <div className="space-y-6">
                  <div>
                    <label className="font-mono text-sm font-medium text-lab-steel tracking-[0.1em] uppercase block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Dr. Funsworth"
                      className="w-full font-body text-base border-2 border-lab-fog px-4 py-3.5
                        focus:border-lab-ink focus:outline-none transition-colors duration-200
                        placeholder:text-lab-steel/60 bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-sm font-medium text-lab-steel tracking-[0.1em] uppercase block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="doc@funscience.org"
                      className="w-full font-mono text-base border-2 border-lab-fog px-4 py-3.5
                        focus:border-lab-ink focus:outline-none transition-colors duration-200
                        placeholder:text-lab-steel/60 bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-sm font-medium text-lab-steel tracking-[0.1em] uppercase block mb-2">
                      Subject
                    </label>
                    <select name="subject" className="w-full font-mono text-base border-2 border-lab-fog px-4 py-3.5
                      focus:border-lab-ink focus:outline-none transition-colors duration-200
                      bg-transparent text-lab-graphite appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%23B8B5AE'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                    >
                      <option>General Inquiry</option>
                      <option>Subject 42 — I Need It Now</option>
                      <option>Press / Media</option>
                      <option>Collaboration / Partnership</option>
                      <option>I Just Want to Say Hi</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-sm font-medium text-lab-steel tracking-[0.1em] uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind. No judgement. Unless you prefer Monopoly."
                      className="w-full font-body text-base border-2 border-lab-fog px-4 py-3.5
                        focus:border-lab-ink focus:outline-none transition-colors duration-200
                        placeholder:text-lab-steel/60 bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-lab-ink text-lab-white font-heading text-base font-bold uppercase tracking-wide
                      px-6 py-4 hover:bg-accent transition-colors duration-300
                      active:scale-[0.99] transform disabled:opacity-60"
                  >
                    {sending ? 'Transmitting...' : 'Transmit Message'}
                  </button>

                  {error && (
                    <p className="font-mono text-sm text-danger text-center">
                      Transmission failed. Try again?
                    </p>
                  )}

                  <p className="font-mono text-sm font-medium text-lab-steel text-center tracking-wide">
                    NO SPAM. WE PROMISE. OKAY MAYBE ONE MEEPLE GIF.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-accent/30 bg-accent-glow/10 p-10 lg:p-14 text-center"
              >
                <div className="text-4xl mb-4">&#9745;</div>
                <h3 className="font-heading font-bold text-2xl text-lab-ink mb-3">
                  Transmission Received
                </h3>
                <p className="text-lab-graphite text-lg mb-2">
                  Your message has been logged in our system.
                </p>
                <p className="font-mono text-base text-lab-steel italic">
                  A real human will respond. Probably with enthusiasm.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
