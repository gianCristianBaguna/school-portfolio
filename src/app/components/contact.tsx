'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiUser, FiMessageCircle, FiSend } from 'react-icons/fi'

export default function Contact(){
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try {
      await new Promise(r => setTimeout(r, 1000))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
        >
          Contact Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.1 }}
          viewport={{ once:true }}
        >
          Whether you want to collaborate, need help building a project, or simply want to say hi — 
          feel free to reach out. I’ll get back to you as soon as I can.
        </motion.p>

        {/* Contact Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity:0, scale:0.95 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }}
          transition={{ type:"spring", stiffness:80 }}
          className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 shadow-xl rounded-2xl p-8 grid gap-6 border border-white/20 dark:border-gray-700"
        >

          {/* NAME FIELD */}
          <motion.div
            className="relative"
            whileFocus={{ scale:1.02 }}
          >
            <FiUser className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              required
              name="name"
              placeholder="Your Name"
              className="pl-10 w-full p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </motion.div>

          {/* EMAIL */}
          <motion.div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="pl-10 w-full p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </motion.div>

          {/* SUBJECT */}
          <motion.div className="relative">
            <FiMessageCircle className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              name="subject"
              placeholder="Subject"
              className="pl-10 w-full p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </motion.div>

          {/* MESSAGE */}
          <motion.div animate={status==="error" ? { x:[0,-10,10,-8,8,0] } : {}}>
            <textarea
              required
              name="message"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none min-h-[140px] transition-all"
            ></textarea>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale:0.95 }}
            className="flex items-center mr-0 w-1/2 gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl shadow-md transition-all disabled:bg-blue-400"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              "Sending..."
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </motion.button>

          {/* STATUS MESSAGES */}
          {status === 'sent' && (
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              className="text-green-500 font-medium"
            >
              Message sent successfully! I’ll respond shortly.
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              className="text-red-500 font-medium"
            >
              Something went wrong — please try again.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
