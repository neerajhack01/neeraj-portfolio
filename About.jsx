import SectionWrapper from './SectionWrapper'

const stats = [
  { num: '30%', label: 'Risk Score Reduction' },
  { num: '4+', label: 'Certifications' },
  { num: '3', label: 'Security Projects' },
  { num: '35%', label: 'Threat Detection Uplift' },
]

export default function About() {
  return (
    <SectionWrapper id="about" label="About" title="Who Am" titleAccent="I" bg="bg-dark-bg2">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="space-y-5 text-dark-text text-base leading-relaxed font-rajdhani">
          <p>
            I'm a <span className="text-neon-cyan font-semibold">highly motivated B.Tech graduate</span> with a sharp focus on offensive security,
            penetration testing, and web application vulnerabilities. My journey into cybersecurity started with a
            deep curiosity for how systems break — and a conviction that understanding the attacker's mindset is the best defense.
          </p>
          <p>
            During my internship at <span className="text-neon-cyan font-semibold">Kleap Institute of Information Security</span>, I performed
            real-world VAPT assessments using Burp Suite and Nessus, coordinated remediation with DevOps teams, and reduced
            critical risk scores by <span className="text-neon-green font-semibold">30%</span>. I apply OWASP Top 10, MITRE ATT&CK, and NIST CSF
            frameworks not just in theory — but in practice.
          </p>
          <p>
            I'm actively seeking an entry-level role in <span className="text-neon-cyan font-semibold">Penetration Testing or Security Operations</span> where
            I can contribute from day one and keep growing alongside a team that takes security seriously.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-dark-surface border border-neon-cyan/10 border-t-2 border-t-neon-green p-6 text-center hover:border-t-neon-cyan transition-colors duration-300"
            >
              <span className="block font-orbitron font-black text-3xl text-neon-green text-glow-green mb-2">
                {s.num}
              </span>
              <span className="font-mono text-xs text-dark-muted tracking-widest uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
