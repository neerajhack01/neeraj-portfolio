import SectionWrapper from './SectionWrapper'

const projects = [
  {
    num: '01',
    title: 'Vulnerability Research & Exploitation Lab',
    desc: 'Executed and documented full-cycle exploitation of OWASP Top 10 attacks including XSS and SQLi using Burp Suite in a controlled virtual lab. Delivered professional VAPT reports detailing identified misconfigurations and remediation steps.',
    tags: ['Burp Suite', 'XSS', 'SQLi', 'OWASP Top 10', 'VAPT Report'],
  },
  {
    num: '02',
    title: 'Authentication & Cloud Storage Security Assessment',
    desc: 'Identified critical web application security issues including an exposed S3 bucket, broken authentication, and session management vulnerabilities. Highlighted risks to data confidentiality and access control with detailed PoC documentation.',
    tags: ['AWS S3', 'Broken Auth', 'Session Mgmt', 'Cloud Security', 'Access Control'],
  },
  {
    num: '03',
    title: 'OWASP-Based Web Application Security Testing',
    desc: 'Performed end-to-end web application security testing including recon, enumeration, scanning, and CORS analysis. Delivered detailed reports with PoCs and remediation — improving threat detection by 35% and reducing security incidents by 20%.',
    tags: ['Nmap', 'Wappalyzer', 'OWASP ZAP', 'Postman', 'CORS', 'Recon'],
    highlight: true,
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects" label="Projects" title="Security" titleAccent="Labs" bg="bg-dark-bg">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative bg-dark-surface border border-neon-cyan/10 p-8 overflow-hidden group hover:border-neon-cyan/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Number watermark */}
            <div className="absolute top-4 right-5 font-orbitron font-black text-4xl text-neon-cyan/5 leading-none select-none">
              {p.num}
            </div>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <h3 className="font-orbitron font-bold text-neon-cyan text-sm leading-snug mb-4 pr-8">
              {p.title}
            </h3>

            <p className="text-dark-text text-sm leading-relaxed mb-6">
              {p.desc.split('35%').map((part, j, arr) =>
                j < arr.length - 1
                  ? <>{part}<span className="text-neon-green font-bold">35%</span></>
                  : part
              )}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t, j) => (
                <span key={j} className="font-mono text-xs px-2.5 py-1 border border-neon-cyan/20 text-dark-muted rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
