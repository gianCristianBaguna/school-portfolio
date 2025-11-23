'use client'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaFigma, FaGit } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: <FaReact className="text-blue-500 w-6 h-6"/> },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST'], icon: <FaNodeJs className="text-green-500 w-6 h-6"/> },
  { category: 'Design', items: ['Figma', 'Excalibur'], icon: <FaFigma className="text-pink-500 w-6 h-6"/> },
  { category: 'Tools', items: ['Git', 'Vercel', 'Postman'], icon: <FaGit className="text-orange-500 w-6 h-6"/> },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gray-50 dark:bg-gray-900 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((s, i) => (
            <motion.div 
              key={i} 
              className="bg-gradient-to-br from-blue-400 to-blue-600 dark:from-purple-600 dark:to-purple-800 p-1 rounded-xl shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }} 
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4">
                  {s.icon}
                </div>

                <h3 className="font-semibold text-xl mb-3">{s.category}</h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {s.items.map((it, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional subtle background circles */}
      <svg 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[120%] h-[120%] opacity-5 dark:opacity-10 pointer-events-none" 
        viewBox="0 0 800 600" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="100" r="250" fill="#3b82f6" />
        <circle cx="600" cy="400" r="200" fill="#60a5fa" />
        <circle cx="400" cy="300" r="300" fill="#93c5fd" />
      </svg>
    </section>
  )
}
