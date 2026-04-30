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
    <footer className="border-t border-[#e4e4e7] bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <GhostLogoSmall />
              <span className="text-[#09090b] font-semibold text-lg tracking-tight">Ghost AI</span>
            </div>
            <p className="text-sm text-[#71717a] leading-relaxed max-w-xs mb-6">
              AI Software Development Consultancy. We build AI systems that transform how your business operates.
            </p>
            <a href="mailto:hello@ghost-ai.co" className="text-sm text-[#09090b] hover:text-[#3f3f46] transition-colors no-underline">
              hello@ghost-ai.co
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#09090b] uppercase tracking-wider mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-[#71717a] hover:text-[#09090b] transition-colors no-underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#09090b] uppercase tracking-wider mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#71717a] hover:text-[#09090b] transition-colors no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1aa]">© {new Date().getFullYear()} Ghost AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#a1a1aa] hover:text-[#71717a] transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-xs text-[#a1a1aa] hover:text-[#71717a] transition-colors no-underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function GhostLogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 3C9.029 3 5 7.029 5 12v10l3-2.5 3 2.5 3-2.5 3 2.5 3-2.5V12C23 7.029 18.971 3 14 3z" fill="#09090b" />
      <circle cx="10.5" cy="12" r="1.5" fill="white" />
      <circle cx="17.5" cy="12" r="1.5" fill="white" />
    </svg>
  )
}
