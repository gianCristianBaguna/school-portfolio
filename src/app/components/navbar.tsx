"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  useEffect(() => {
    function onResize() { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') document.documentElement.classList.add('dark')
  }, [])

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ type: 'spring', stiffness: 120 }} className="fixed w-full z-50 bg-white/80 dark:bg-blue-500/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <a href="#hero" className="font-bold text-lg text-white">JIIEAN</a>

            <nav className="hidden md:flex gap-6 items-center">
              <a href="#hero" className="hover:underline text-white">Home</a>
              <a href="#about" className="hover:underline text-white">About</a>
              <a href="#skills" className="hover:underline text-white">Skills</a>
              <a href="#projects" className="hover:underline text-white">Projects</a>
              <a href="#contact" className="hover:underline text-white">Contact</a>
            </nav>

            <div className="md:hidden flex items-center gap-3">
              <button onClick={toggleTheme} className="px-2 py-1 rounded border">⚫/⚪</button>
              <button onClick={() => setOpen(v => !v)} className="p-2">{open ? '✕' : '☰'}</button>
            </div>
          </div>

          <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60`}>
            <div className="flex flex-col p-4 gap-3">
              <a href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}