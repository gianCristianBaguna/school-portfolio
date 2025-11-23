'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

const projectData = [
  { 
    title: 'Uplift Foundation', 
    desc: 'Donation Website', 
    tech: ['Next.js','Node','MongoDB'], 
    github: '#', 
    demo: 'https://www.upliftfoundationint.org/',
    img: '/projects/uplift.png', // background image
    logo: '/logos/uplift.png'    // optional top logo
  },
  { 
    title: 'MTSI', 
    desc: 'Company Website', 
    tech: ['React','Stripe'], 
    github: '#', 
    demo: 'https://mtsi-web.vercel.app/',
    img: '/projects/mtsi.png',
    logo: '/logos/mtsi.png'
  },
  { 
    title: 'Wisdomous', 
    desc: 'Wisdomous Website', 
    tech: ['Next.js','Framer Motion'], 
    github: '#', 
    demo: 'https://www.wisdomoustech.com/',
    img: '/projects/wisdo.png',
    logo: '/logos/wisdo.png'
  },
]

function TiltCard({ children }){
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(y, { stiffness: 300, damping: 20 })
  const rotateY = useSpring(x, { stiffness: 300, damping: 20 })

  function handleMove(e){
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set((px - 0.5) * 20)
    y.set((py - 0.5) * -20)
  }
  function handleLeave(){ x.set(0); y.set(0) }

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

export default function Projects(){
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projectData.map((p,i) => (
            <TiltCard key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="relative overflow-hidden rounded-xl shadow-lg bg-gray-900/70 dark:bg-gray-800"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url(${p.img})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

                {/* Content */}
                <div className="relative p-6 text-white">
                  
                  {/* Logo (optional) */}
                  {p.logo && (
                    <img 
                      src={p.logo} 
                      alt="logo"
                      className="h-12 mb-3 object-contain drop-shadow-lg"
                    />
                  )}

                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-gray-200">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t,idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-white/20 rounded backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a href={p.github} className="underline text-blue-300">GitHub</a>
                    <a href={p.demo} className="underline text-blue-300">Live</a>
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
