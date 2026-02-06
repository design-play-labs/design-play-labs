import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const IMG_HERO = '/images/Photorealistic/2026-01-29-dpl-photo-particle-accelerator-games.png'
const IMG_XRAY = '/images/Photorealistic/2026-01-29-dpl-photo-xray-meeple.png'
const IMG_LASER = '/images/Photorealistic/2026-01-29-dpl-photo-laser-burning-dice-pips.png'

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Subject42() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="games"
      ref={sectionRef}
      className="relative py-28 lg:py-40 bg-lab-ink overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-s42-purple/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-s42-amber/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="font-mono text-base font-medium uppercase tracking-[0.1em] text-lab-steel border border-lab-graphite px-4 py-2 inline-block">
            Section 03 — Featured Experiment
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[8rem] leading-[0.85] tracking-tighter text-white">
            SUBJECT
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-s42-purple via-s42-amber to-s42-purple">
                42
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-s42-purple to-s42-amber"
              />
            </span>
          </h2>
        </motion.div>

        {/* Hero Image — The Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16 lg:mb-24"
        >
          <TiltCard className="cursor-default">
            <div className="relative border border-white/10 overflow-hidden group">
              {/* Purple tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-s42-purple/10 to-transparent z-10 pointer-events-none" />

              <img
                src={IMG_HERO}
                alt="Scientists in lab coats observe colorful meeples and game components racing through a particle accelerator tube with streaks of neon light"
                className="w-full aspect-[21/9] object-cover group-hover:scale-[1.01] transition-transform duration-1000"
              />

              {/* Scan line effect */}
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'linear' }}
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-s42-purple/50 to-transparent z-20 pointer-events-none"
              />

              {/* Data overlays */}
              <div className="absolute top-4 left-4 z-20">
                <span className="font-mono text-sm font-medium text-white/50 tracking-wider block">
                  CLASSIFIED // DPL-042
                </span>
                <span className="font-mono text-sm font-medium text-s42-amber/70 tracking-wider block mt-1">
                  STATUS: ACTIVE
                </span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 text-right">
                <span className="font-mono text-sm font-medium text-white/40 tracking-wider block">
                  THE EXTREME SCIENCE OF FUN
                </span>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-s42-purple/40 z-20" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-s42-purple/40 z-20" />
            </div>
          </TiltCard>
        </motion.div>

        {/* Description + Card Samples */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
              A card game system of chaos and questionable decision-making. Fun for
              hardcore gamers. Fun for your friend who "doesn't really play games."
            </p>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
              Fun for even Tina, if you can believe it — and Tina doesn't like anything.
            </p>

            {/* Release badge */}
            <div className="inline-block border border-s42-amber/40 bg-s42-amber/5 px-6 py-4">
              <span className="font-mono text-sm font-medium text-s42-amber tracking-[0.2em] uppercase block">
                Release Date
              </span>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1 block">
                FALL 2026
              </span>
              <span className="font-mono text-sm font-medium text-white/40 tracking-wider mt-1 block">
                CLEAR YOUR SCHEDULES.
              </span>
            </div>
          </motion.div>

          {/* Card samples - tilt on hover */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="cursor-default">
                <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden group">
                  <img
                    src={IMG_XRAY}
                    alt="X-ray scan of a meeple showing colorful layered internal structure on a medical monitor"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="p-5 border-t border-white/10">
                    <span className="font-mono text-sm font-medium text-s42-purple tracking-[0.1em] uppercase block">
                      Card Type — Analysis
                    </span>
                    <span className="font-heading font-bold text-white text-base mt-1.5 block">
                      Internal Structure: Meeple Core
                    </span>
                    <span className="font-mono text-sm text-white/40 mt-1 block">
                      "What makes them tick? Science."
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="cursor-default">
                <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden group">
                  <img
                    src={IMG_LASER}
                    alt="A robotic arm fires a precise violet laser beam at a rainbow-colored die, burning detailed pip marks into its surface"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="p-5 border-t border-white/10">
                    <span className="font-mono text-sm font-medium text-s42-amber tracking-[0.1em] uppercase block">
                      Card Type — Precision
                    </span>
                    <span className="font-heading font-bold text-white text-base mt-1.5 block">
                      Laser Calibration Protocol
                    </span>
                    <span className="font-mono text-sm text-white/40 mt-1 block">
                      "Every pip. Perfectly placed."
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
