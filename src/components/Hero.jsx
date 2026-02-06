import { useState } from 'react'
import { motion } from 'framer-motion'

const HERO_IMG = '/images/Photorealistic/2026-01-29-dpl-photo-box-exploding-contents.png'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [honey, setHoney] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _honey: honey }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative lab-grid overflow-hidden">
      {/* Faint corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-lab-fog" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-lab-fog" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 sm:pt-32 lg:pt-48 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Text Column — takes 8 of 12 cols on desktop */}
          <div className="lg:col-span-8 min-w-0 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="specimen-label mb-6">
                Experiment #001 — Test Subjects Wanted
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.95] tracking-tight mt-6 mb-8"
            >
              OBSESSIVELY
              <br />
              <span className="relative inline-block">
                CRAFTED
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 w-full h-1.5 bg-accent origin-left"
                />
              </span>
              <br />
              FUN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lab-graphite text-lg sm:text-xl leading-relaxed max-w-lg mb-10"
            >
              We're an indie board/card game studio that treats fun like the serious
              science it obviously is. Something extraordinary is brewing.
            </motion.p>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 bg-accent-glow/40 border border-accent/20 px-5 py-4 max-w-lg"
                >
                  <span className="text-accent text-xl">&#10003;</span>
                  <span className="font-mono text-base text-accent-dim">
                    You've been assigned a Subject number. Don't lose it.
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  {/* Honeypot — hidden from humans, bots fill it out */}
                  <input
                    type="text"
                    name="_honey"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    className="absolute opacity-0 pointer-events-none h-0 w-0"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={status === 'sending'}
                      className="w-full font-mono text-base bg-white border-2 border-lab-fog px-5 py-4
                        focus:border-lab-ink focus:outline-none transition-colors duration-200
                        placeholder:text-lab-steel disabled:opacity-60"
                    />
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-lab-ink text-lab-white font-heading text-base font-bold uppercase tracking-wide
                      px-7 py-4 hover:bg-accent transition-colors duration-300 shrink-0
                      active:scale-[0.98] transform disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Submitting...' : 'Get Notified'}
                  </button>
                  {status === 'error' && (
                    <p className="font-mono text-sm text-danger mt-2 sm:col-span-2">
                      Something went wrong. Try again?
                    </p>
                  )}
                </form>
              )}
              <p className="font-mono text-sm font-medium text-lab-steel mt-4 tracking-wide">
                Kickstarter coming soon — get in before Tina does.
              </p>
            </motion.div>
          </div>

          {/* Image Column — 4 of 12 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 min-w-0 relative overflow-hidden"
          >
            <div className="relative border border-lab-fog">
              <img
                src={HERO_IMG}
                alt="An explosion of colorful meeples, dice, and game components bursting from a white box in a pristine laboratory setting"
                className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover"
              />

              {/* Corner data labels */}
              <div className="absolute top-4 left-4 bg-lab-white/90 backdrop-blur-sm px-3 py-1.5">
                <span className="font-mono text-sm font-medium text-lab-steel tracking-wider">
                  DPL-LAB // 2026
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-lab-white/90 backdrop-blur-sm px-3 py-1.5">
                <span className="font-mono text-sm font-medium text-lab-steel tracking-wider">
                  FIG. 01
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-sm font-medium text-lab-steel tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6 bg-lab-steel"
        />
      </motion.div>
    </section>
  )
}
