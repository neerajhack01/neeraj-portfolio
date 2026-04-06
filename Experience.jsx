import SectionWrapper from './SectionWrapper'

const experiences = [
  {
    date: 'FEB 2025 — PRESENT',
    role: 'Information Security Analyst Intern',
    company: 'Kleap Institute of Information Security',
    location: 'Hyderabad, India',
    bullets: [
      <>Performed VAPT and web application security assessments using <strong className="text-neon-green">Burp Suite</strong> and <strong className="text-neon-green">Nessus</strong>, identifying critical vulnerabilities across client environments.</>,
      <>Coordinated remediation workflows with IT/DevOps teams, achieving a <strong className="text-neon-green">30% reduction</strong> in critical risk scores.</>,
      <>Leveraged <strong className="text-neon-green">OWASP Top 10</strong>, <strong className="text-neon-green">MITRE ATT&CK</strong>, and <strong className="text-neon-green">NIST CSF</strong> to prioritize findings and standardize security reporting.</>,
      <>Automated Linux CLI tasks and ensured compliance alignment with <strong className="text-neon-green">ISO 27001</strong> and <strong className="text-neon-green">GDPR</strong>.</>,
    ],
  },
  {
    date: 'SEP 2025 — DEC 2025',
    role: 'Community Engagement Lead',
    company: 'Cybersecurity Community',
    location: 'Hyderabad, India',
    bullets: [
      'Organized campus and industry events driving strong participation in cybersecurity and technology learning.',
      'Mentored and supported students through workshops, presentations, and collaborative lab projects — fostering practical security skills.',
    ],
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience" label="Experience" title="Professional" titleAccent="Journey" bg="bg-dark-bg2">
      <div className="relative pl-6 border-l border-gradient-to-b from-neon-green to-transparent"
        style={{ borderImage: 'linear-gradient(180deg, #00ff9d, #00e5ff, transparent) 1' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-14 last:mb-0 pl-9">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-3 h-3 border-2 border-neon-green bg-dark-bg shadow-glow-green" />

            <p className="font-mono text-xs text-neon-green tracking-widest mb-2">{exp.date}</p>
            <h3 className="font-orbitron font-bold text-white text-lg mb-1">{exp.role}</h3>
            <p className="text-neon-cyan font-semibold mb-5 text-sm">
              {exp.company} · <span className="text-dark-muted font-normal">{exp.location}</span>
            </p>

            <ul className="space-y-3">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-dark-text text-sm leading-relaxed">
                  <span className="text-neon-green mt-0.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
