import SectionWrapper from './SectionWrapper'

const certs = [
  { icon: '🔑', name: 'CAPIE — Certified API Hacking Expert', issuer: 'Internshala', active: true },
  { icon: '🛡', name: 'CRPO — Certified Ransomware Protection', issuer: 'EU Cyber Academy', active: true },
  { icon: '📋', name: 'ISO/IEC 27001:2022 Information Security Associate™', issuer: 'SkillFront', active: true },
  { icon: '🎓', name: 'CCEP — Certified Cybersecurity Educator Professional', issuer: 'CCEP Program', active: true },
  { icon: '⏳', name: 'CompTIA Security+', issuer: 'In Progress', active: false },
  { icon: '⏳', name: 'CEH — Certified Ethical Hacker', issuer: 'EC-Council · In Progress', active: false },
]

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" label="Certifications" title="Credentials &" titleAccent="Training" bg="bg-dark-bg2">
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <div
            key={i}
            className={`flex items-center gap-5 bg-dark-surface border border-neon-cyan/10 px-6 py-5 transition-all duration-200
              ${c.active
                ? 'border-l-2 border-l-neon-amber hover:border-l-neon-green hover:translate-x-1 cursor-default'
                : 'border-l-2 border-l-dark-muted opacity-60'
              }`}
          >
            <span className={`text-2xl w-10 text-center shrink-0 ${!c.active && 'grayscale'}`}>{c.icon}</span>
            <div>
              <div className={`font-rajdhani font-semibold text-base mb-1 ${c.active ? 'text-white' : 'text-dark-muted'}`}>
                {c.name}
              </div>
              <div className="font-mono text-xs text-dark-muted tracking-widest uppercase">
                {c.issuer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
