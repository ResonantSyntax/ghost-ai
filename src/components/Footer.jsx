const footerLinks = {
  Services: [
    'AI System Integration',
    'Business Platforms',
    'Operational Agents',
    'Data Intelligence',
    'Workflow Automation',
    'ERP & CRM',
  ],
  Company: [
    { label: 'About', href: '#cta' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1f1f23]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <GhostLogoSmall />
              <span className="text-[#fafafa] font-semibold text-lg tracking-tight">
                Ghost <span className="text-[#a855f7]">AI</span>
              </span>
            </div>
            <p className="text-sm text-[#71717a] leading-relaxed max-w-xs mb-6">
              AI Software Development Consultancy. We build AI systems that transform how your business operates.
            </p>
            <a
              href="mailto:hello@ghost-ai.co"
              className="text-sm text-[#a855f7] hover:text-[#c084fc] transition-colors no-underline"
            >
              hello@ghost-ai.co
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-[#71717a] hover:text-[#a1a1aa] transition-colors no-underline"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#71717a] hover:text-[#a1a1aa] transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1f1f23] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#52525b]">
            © {new Date().getFullYear()} Ghost AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#52525b] hover:text-[#71717a] transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-xs text-[#52525b] hover:text-[#71717a] transition-colors no-underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function GhostLogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ghost-grad-sm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M14 3C9.029 3 5 7.029 5 12v10l3-2.5 3 2.5 3-2.5 3 2.5 3-2.5V12C23 7.029 18.971 3 14 3z"
        fill="url(#ghost-grad-sm)"
      />
      <circle cx="10.5" cy="12" r="1.5" fill="white" fillOpacity="0.9" />
      <circle cx="17.5" cy="12" r="1.5" fill="white" fillOpacity="0.9" />
    </svg>
  )
}
