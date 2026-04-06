import SectionWrapper from './SectionWrapper'
import { FiMail, FiLinkedin, FiPhone, FiGithub } from 'react-icons/fi'

const links = [
  {
    icon: <FiMail size={16} />,
    label: 'neerajhack3@gmail.com',
    href: 'mailto:neerajhack3@gmail.com',
  },
  {
    icon: <FiLinkedin size={16} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/neeraj-sai-kumar03',
  },
  {
    icon: <FiPhone size={16} />,
    label: '+91 63019 96295',
    href: 'tel:+916301996295',
  },
  {
    icon: <FiGithub size={16} />,
    label: 'GitHub',
    href: 'https://github.com/neerajhack3',
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" label="Contact" title="Let's" titleAccent="Connect" bg="bg-dark-bg">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-dark-text text-base leading-relaxed mb-12 font-rajdhani">
          I'm actively looking for entry-level opportunities in Penetration Testing, Security Operations, or Cloud Security.
          If you're building a security team or just want to talk shop — reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase px-6 py-4 bg-dark-surface border border-neon-cyan/10 text-dark-text hover:border-neon-green hover:text-neon-green hover:shadow-glow-green transition-all duration-200"
            >
              {l.icon}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
