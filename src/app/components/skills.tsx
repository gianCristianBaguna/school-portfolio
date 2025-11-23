'use client'
import { motion } from 'framer-motion'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST'] },
  { category: 'Design', items: ['Figma', 'Excalibur'] },
  { category: 'Tools', items: ['Git', 'Vercel', 'Postman'] },
]

export default function Skills(){
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills</motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
              <h3 className="font-semibold mb-2">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it,j) => (
                  <span key={j} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}