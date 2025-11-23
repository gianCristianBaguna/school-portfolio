'use client'
import { motion } from 'framer-motion'
import useParallax from '../../hooks/useParallax'

export default function About() {
  const ref = useParallax(0.15)

  const timeline = [
    { year: '2025', title: 'Frontend Engineer', desc: 'Building performant SPAs and PWAs with Next.js and React.' },
    { year: '2024', title: 'Started Web Developing Jobs', desc: 'Developed multiple Frontend apps using NextJs, Svelte and React.' },
    { year: '2021', title: 'Started Learning Web Dev', desc: 'Self-taught journey: HTML, CSS, JS, then React.' },
  ]

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Floating Background Shapes */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[120%] h-[120%] opacity-10 dark:opacity-20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
      >
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="400" cy="300" r="300" fill="#3b82f6" />
          <circle cx="600" cy="100" r="200" fill="#60a5fa" />
          <circle cx="200" cy="500" r="250" fill="#93c5fd" />
        </svg>
      </motion.div>

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          ref={ref} 
          className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl mb-16 px-2 md:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>1. I am a passionate developer who focuses on building accessible and delightful web experiences.</p>
          <p>2. My philosophy: Keep interfaces simple, state predictable, and performance great.</p>
          <p>3. Outside of coding I enjoy basketball and exploring new games and entertainments.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-purple-500 dark:to-purple-700 ml-6 rounded" />
          <div className="flex flex-col gap-10 pl-12">
            {timeline.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 120 }}
                className="relative group"
              >
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-purple-500 dark:to-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg">
                  {item.year.slice(2)}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
