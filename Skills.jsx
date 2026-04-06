import SectionWrapper from './SectionWrapper'

const skillGroups = [
  {
    title: '⚔ Offensive Security',
    color: 'green',
    tags: ['VAPT', 'Burp Suite', 'Metasploit', 'MSFvenom', 'Hashcat', 'Exploit Development', 'Web App Security', 'OWASP Top 10'],
  },
  {
    title: '🔎 Recon & Scanning',
    color: 'cyan',
    tags: ['Nmap', 'Nessus', 'Shodan', 'Subfinder', 'theHarvester', 'Google Dorks', 'GitHub Dorks', 'Wireshark'],
  },
  {
    title: '🛡 Defense & SOC',
    color: 'green',
    tags: ['Incident Response', 'Network Forensics', 'MITRE ATT&CK', 'NIST CSF', 'ISO 27001', 'GDPR', 'Remediation Planning'],
  },
  {
    title: '☁ Cloud & Infrastructure',
    color: 'amber',
    tags: ['AWS / IAM', 'S3 Security', 'Cloud Security Principles', 'Linux CLI', 'Windows Security', 'TCP/IP · DNS · HTTP'],
  },
  {
    title: '💻 Development',
    color: 'green',
    tags: ['Python', 'Bash Scripting', 'Java', 'Secure Coding', 'Automation', 'API Security'],
  },
  {
    title: '🧰 Tools & Testing',
    color: 'cyan',
    tags: ['OWASP ZAP', 'Postman', 'Wappalyzer', 'CORS Analysis', 'Application Hardening', 'Nessus'],
  },
]

const tagStyles = {
  green: 'bg-neon-green/5 border-neon-green/20 hover:bg-neon-green/10 hover:text-neon-green hover:border-neon-green/40',
  cyan:  'bg-neon-cyan/5 border-neon-cyan/20 hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/40',
  amber: 'bg-neon-amber/5 border-neon-amber/20 hover:bg-neon-amber/10 hover:text-neon-amber hover:border-neon-amber/40',
}

const titleStyles = {
  green: 'text-neon-green',
  cyan: 'text-neon-cyan',
  amber: 'text-neon-amber',
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="Skills" title="Technical" titleAccent="Arsenal" bg="bg-dark-bg">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="relative bg-dark-surface border border-neon-cyan/10 p-7 overflow-hidden group hover:border-neon-green/30 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-green to-neon-cyan" />

            <h3 className={`font-orbitron font-bold text-xs tracking-widest uppercase mb-5 ${titleStyles[group.color]}`}>
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`font-mono text-xs px-3 py-1.5 border text-dark-text rounded-sm transition-all duration-200 cursor-default ${tagStyles[group.color]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
