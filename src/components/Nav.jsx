import { useState, useEffect } from 'react'

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
        background: scrolled
          ? 'rgba(8,8,10,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(39,39,42,0.8)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <GhostLogo />
          <span className="text-[#fafafa] font-semibold text-lg tracking-tight">
            Ghost <span className="text-[#a855f7]">AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors duration-150 no-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg border border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] transition-all duration-150 no-underline"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[#a855f7] hover:bg-[#9333ea] text-white transition-colors duration-150 no-underline"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b] transition-colors"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#27272a] bg-[#08080a]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors no-underline py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-sm font-medium px-4 py-2.5 rounded-lg bg-[#a855f7] hover:bg-[#9333ea] text-white transition-colors text-center no-underline"
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
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ghost-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M14 3C9.029 3 5 7.029 5 12v10l3-2.5 3 2.5 3-2.5 3 2.5 3-2.5V12C23 7.029 18.971 3 14 3z"
        fill="url(#ghost-grad)"
      />
      <circle cx="10.5" cy="12" r="1.5" fill="white" fillOpacity="0.9" />
      <circle cx="17.5" cy="12" r="1.5" fill="white" fillOpacity="0.9" />
    </svg>
  )
}
