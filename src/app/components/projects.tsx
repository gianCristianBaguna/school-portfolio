"use client"
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

const projectData = [
  {
    title: "Uplift Foundation",
    desc: "Donation Website",
    tech: ["Next.js", "Node", "MongoDB"],
    github: "https://github.com/gianCristianBaguna/UpLift",
    demo: "https://www.upliftfoundationint.org/",
    img: "/projects/uplift.png",
    logo: "/logos/uplift.png",
  },
  {
    title: "MTSI",
    desc: "Company Website",
    tech: ["React", "Stripe"],
    github: "https://github.com/gianCristianBaguna/mtsi-web",
    demo: "https://mtsi-web.vercel.app/",
    img: "/projects/mtsi.png",
    logo: "/logos/mtsi.png",
  },
  {
    title: "Wisdomous",
    desc: "Wisdomous Website",
    tech: ["Next.js", "Framer Motion"],
    github: "https://github.com/gianCristianBaguna/wisdomous",
    demo: "https://www.wisdomoustech.com/",
    img: "/projects/wisdo.png",
    logo: "/logos/wisdo.png",
  },
]

function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(y, { stiffness: 300, damping: 20 })
  const rotateY = useSpring(x, { stiffness: 300, damping: 20 })

  function handleMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set((px - 0.5) * 20)
    y.set((py - 0.5) * -20)
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Background shapes */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[150%] h-[150%] opacity-10 dark:opacity-20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 200, ease: 'linear' }}
      >
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="400" cy="300" r="300" fill="#3b82f6" />
          <circle cx="600" cy="100" r="200" fill="#60a5fa" />
          <circle cx="200" cy="500" r="250" fill="#93c5fd" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-500">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((p, i) => (
            <TiltCard key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-blue-500 via-blue-700 to-purple-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${p.img})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

                {/* Content */}
                <div className="relative p-6 text-white flex flex-col justify-between h-full">
                  {/* Logo */}
                  {p.logo && (
                    <img
                      src={p.logo}
                      alt="logo"
                      className="h-12 mb-3 object-contain drop-shadow-lg mx-auto"
                    />
                  )}

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-200 mb-4">{p.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={p.github}
                      className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={p.demo}
                      className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
