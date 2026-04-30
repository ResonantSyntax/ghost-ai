import { useState, useEffect } from 'react'
import GhostSVG from './GhostSVG'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#cta' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #e4e4e7' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <GhostLogo />
          <span style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: '13px', lineHeight: '1.4', color: '#1c1c1c' }}>
            GHOST<br />AI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#71717a] hover:text-[#09090b] transition-colors duration-150 no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-[#e4e4e7] text-[#71717a] hover:text-[#09090b] hover:border-[#09090b] transition-all duration-150 no-underline"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[#09090b] hover:bg-[#3f3f46] text-white transition-colors duration-150 no-underline"
          >
            Start a Project
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-[#71717a] hover:text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#e4e4e7] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#71717a] hover:text-[#09090b] transition-colors no-underline py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-sm font-medium px-4 py-2.5 rounded-lg bg-[#09090b] hover:bg-[#3f3f46] text-white transition-colors text-center no-underline"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function GhostLogo() {
  return <GhostSVG size={40} />
}
