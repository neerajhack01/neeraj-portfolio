import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const TYPED_TEXT = '[ VAPT · Web AppSec · SOC · Cloud Security ]'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < TYPED_TEXT.length) {
          setTyped(TYPED_TEXT.slice(0, indexRef.current + 1))
          indexRef.current++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return () => clearInterval(interval)
    }, 900)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-28 pb-20 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" style={{
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,255,157,0.07) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex-1">
          <motion.p
            className="font-mono text-xs text-neon-green tracking-[0.25em] uppercase mb-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            <span className="text-dark-muted">&gt; </span>Cybersecurity Analyst &amp; Penetration Tester
          </motion.p>

          <motion.h1
            className="font-orbitron font-black leading-tight mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          >
            <span className="text-white">Siripurapu</span><br />
            <span className="text-neon-green text-glow-green">Neeraj</span>
            <span className="text-white"> Sai Kumar</span>
          </motion.h1>

          <motion.div
            className="font-mono text-neon-cyan text-sm md:text-base tracking-wider mb-8 h-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          >
            {typed}
            <span className={`inline-block w-0.5 h-4 bg-neon-green ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </motion.div>

          <motion.p
            className="text-dark-text text-base md:text-lg max-w-lg mb-10 leading-relaxed font-rajdhani font-400"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          >
            B.Tech Graduate specializing in Offensive Security and Web Application Security.
            I find what others miss — then help fix it before adversaries exploit it.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="font-mono text-xs tracking-widest uppercase px-7 py-3.5 bg-neon-green text-black font-bold rounded-sm hover:shadow-glow-green hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                View Projects
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="font-mono text-xs tracking-widest uppercase px-7 py-3.5 border border-neon-cyan text-neon-cyan bg-transparent rounded-sm hover:bg-neon-cyan/10 hover:shadow-glow-cyan hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right: Status badges */}
        <motion.div
          className="hidden lg:flex flex-col gap-3 shrink-0"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
        >
          {[
            { dot: 'green', text: 'Available for Opportunities' },
            { dot: 'green', text: 'Hyderabad, India' },
            { dot: 'amber', text: 'Security+ & CEH — In Progress' },
          ].map((b, i) => (
            <div key={i} className={`bg-dark-surface border border-neon-cyan/10 border-l-2 ${b.dot === 'amber' ? 'border-l-neon-amber' : 'border-l-neon-green'} px-5 py-3 font-mono text-xs text-dark-muted tracking-wider whitespace-nowrap flex items-center gap-2`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse-slow ${b.dot === 'amber' ? 'bg-neon-amber shadow-glow-amber' : 'bg-neon-green shadow-glow-green'}`} />
              {b.text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
      >
        <span className="font-mono text-xs text-dark-muted tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-neon-green to-transparent" />
      </motion.div>
    </section>
  )
}
