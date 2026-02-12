import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IMG_MICROSCOPE = '/images/Photorealistic/2026-01-29-dpl-photo-microscope-meeple.webp'
const IMG_PETRI = '/images/Photorealistic/2026-01-29-dpl-photo-petri-dish-meeples-growing.webp'
const IMG_TEST_TUBES = '/images/Photorealistic/2026-01-29-dpl-photo-tall-test-tubes-rainbow.webp'

const stats = [
  { value: '2,847', label: 'Prototypes Destroyed', note: '(so far)' },
  { value: '42', label: 'Active Experiments', note: '' },
  { value: '∞', label: 'Meeples Harmed', note: '(all volunteers)' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36 bg-lab-bone noise-overlay overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="specimen-label"
          >
            Section 02 — About the Lab
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-[0.95] tracking-tight mt-6 mb-8"
          >
            PRECISION
            <br />
            ENGINEERED
            <br />
            <span className="text-accent">FOR LAUGHTER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lab-graphite text-lg sm:text-xl leading-relaxed"
          >
            At Design Play Labs, we treat fun as a serious science. Our mission?
            Distilling complex mechanics into elegant, accessible gameplay. From gorgeous
            card art to bubbling beakers, every component is rigorously tested for maximum
            player engagement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-base text-lab-steel mt-4 italic"
          >
            (No actual beakers were bubbled in the making of this studio. Our lawyers were extremely specific about this.)
          </motion.p>
        </div>

        {/* Image mosaic + stats */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative overflow-hidden border border-lab-fog bg-white">
              <img
                src={IMG_MICROSCOPE}
                alt="A meeple being examined under a brass microscope, magnified to reveal its blue and red painted details"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/30 to-transparent h-24" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-sm font-medium text-white/80 tracking-wider">
                  SPECIMEN ANALYSIS — 400x MAGNIFICATION
                </span>
              </div>
            </div>
          </motion.div>

          {/* Side stack: small image + stats */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden border border-lab-fog bg-white"
            >
              <img
                src={IMG_PETRI}
                alt="Colorful meeples growing in clusters inside a petri dish, viewed from above in a laboratory setting"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-lab-white/90 backdrop-blur-sm px-3 py-1.5">
                <span className="font-mono text-sm font-medium text-lab-steel tracking-wider">
                  FIG. 02
                </span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border border-lab-fog bg-white p-6 lg:p-8"
            >
              <span className="font-mono text-sm font-medium text-lab-steel tracking-[0.12em] uppercase block mb-5">
                Lab Metrics — Current Quarter
              </span>
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-heading font-extrabold text-2xl sm:text-xl lg:text-3xl text-lab-ink">
                      {stat.value}
                    </div>
                    <div className="font-mono text-sm font-medium text-lab-graphite tracking-wide mt-1 leading-tight">
                      {stat.label}
                    </div>
                    {stat.note && (
                      <div className="font-mono text-sm text-lab-steel italic mt-0.5">
                        {stat.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative corner image - test tubes */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 0.12, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 lg:w-80 pointer-events-none hidden lg:block"
      >
        <img
          src={IMG_TEST_TUBES}
          alt=""
          className="w-full grayscale"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  )
}
