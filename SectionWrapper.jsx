import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function SectionWrapper({ id, label, title, titleAccent, bg, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 px-6 md:px-16 ${bg || 'bg-dark-bg'}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-neon-green tracking-[0.25em] uppercase mb-3">
            <span className="text-dark-muted">// </span>{label}
          </p>
          <h2 className="font-orbitron font-bold text-white mb-14" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
            {title} <span className="text-neon-cyan">{titleAccent}</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
