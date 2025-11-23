'use client'
import { motion } from 'framer-motion'
import useParallax from '../../hooks/useParallax'

export default function About(){
  const ref = useParallax(0.15) // parallax small offset

  const timeline = [
    { year: '2025', title: 'Frontend Engineer', desc: 'Building performant SPAs and PWAs with Next.js and React.' },
    { year: '2024', title: 'Started Web Developing Jobs', desc: 'Developed multiple Frontend apps using NextJs, Svelte and React.' },
    { year: '2021', title: 'Started Learning Web Dev', desc: 'Self-taught journey: HTML, CSS, JS, then React.' },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-5xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About</motion.h2>

        <div ref={ref} className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>1. I am a passionate developer who focuses on building accessible and delightful web experiences.</p>
          <p>2. My philosophy: Keep interfaces simple, state predictable, and performance great.</p>
          <p>3. Outside of coding I enjoy basketball and exploring new games and entertainments.</p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 ml-6" />
            <div className="flex flex-col gap-8 pl-12">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative">
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-blue-600 dark:bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center">{item.year.slice(2)}</div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}