"use client";
import { motion } from "framer-motion";
import useTypewriter from "../../hooks/useTypewriter";
import AnimatedSVG from "./animatedSVG";
import { connectRealtime, sendPointer } from "../../utils/realtime";
import { useEffect, useState } from "react";

type Peer = {
  x: number;
  y: number;
};

export default function Hero() {
  const [text] = useTypewriter(
    ["Full-Stack Developer.", "Frontend Engineer.", "Creative Web Developer."],
    120
  );
  const [peers, setPeers] = useState<Peer[]>([]);

  useEffect(() => {
    const ws = connectRealtime((msg) => {
      if (msg.type === "peers") setPeers(msg.data);
    });
    function onMove(e: MouseEvent) {
      sendPointer({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      ws.close();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden main-pt"
    >
      <AnimatedSVG />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">Jiiean</h1>
        <h2 className="mt-3 text-2xl md:text-3xl text-blue-600 dark:text-blue-400 h-10">
          {text}
          <span className="blink">|</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-3xl">
          I build modern, accessible, and high-performance web applications with
          a focus on great UX and clean code.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border">
            Contact
          </a>
        </div>
      </motion.div>

      {/* show simple peer dots for collaborative cursors */}
      <div aria-hidden className="pointer-events-none">
        {peers.map((p, i) => (
          <motion.div
            key={i}
            className="pointer-dot bg-blue-600 fixed"
            style={{
              left: p.x,
              top: p.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        ))}
      </div>
    </section>
  );
}
