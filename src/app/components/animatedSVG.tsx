"use client"
import { motion } from 'framer-motion'

export default function AnimatedSVG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* MAIN WAVES */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="g2" x1="1" x2="0">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Wave Layer 1 */}
        <motion.path
          d="M0,160 C240,220 360,100 720,160 C1080,220 1200,80 1440,140 L1440,800 L0,800 Z"
          fill="url(#g1)"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Wave Layer 2 */}
        <motion.path
          d="M0,240 C320,320 480,160 720,220 C960,280 1120,180 1440,220 L1440,800 L0,800 Z"
          fill="url(#g2)"
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Wave Layer 3 */}
        <motion.path
          d="M0,320 C260,380 500,280 740,340 C980,400 1180,260 1440,320 L1440,800 L0,800 Z"
          fill="rgba(139,92,246,0.10)"
          animate={{ y: [0, -45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Wave Layer 4 — slow */}
        <motion.path
          d="M0,380 C200,460 520,360 820,420 C1120,480 1280,340 1440,390 L1440,800 L0,800 Z"
          fill="rgba(96,165,250,0.10)"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: Math.random() * 12 + 4,
            height: Math.random() * 12 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      ))}

      {/* FLOATING ORBS */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"
        style={{ right: '15%', top: '35%' }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* GRAIN / NOISE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.png")',
        }}
      ></div>
    </div>
  )
}
