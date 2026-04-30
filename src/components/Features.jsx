const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'AI-Driven System Integration',
    description:
      'Use AI to unify fragmented systems — enabling intelligent data flow, automation, and decision-making across platforms.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="m8 21 4-4 4 4M12 17v4" />
        <path d="M7 10h10M7 7h4" />
      </svg>
    ),
    title: 'AI-Powered Business Platforms',
    description:
      'Design platforms where AI sits at the core — orchestrating workflows, interpreting data, and driving operations.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 2.5-1.5 4.5-3.5 5.4V14h1.5a1 1 0 0 1 0 2H13v1.5a1 1 0 0 1-2 0V16h-1.5a1 1 0 0 1 0-2H11v-1.6C9 11.5 7 9.5 7 7a5 5 0 0 1 5-5z" />
        <path d="M9 21h6" />
      </svg>
    ),
    title: 'AI Operational Agents',
    description:
      'Deploy AI agents that execute real business tasks — handling workflows, decisions, and system interactions end-to-end.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    title: 'AI Data Intelligence Systems',
    description:
      'Turn raw business data into AI-driven insights, reporting, and automated commentary that supports decision-making.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="m8 12 3 3 5-5" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    title: 'AI Workflow Automation',
    description:
      'Replace manual processes with AI-driven workflows that adapt, respond, and execute across systems in real time.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'AI-Integrated ERP & CRM Systems',
    description:
      'Embed AI into existing systems to automate processes, enrich data, and enable smarter operations without full rebuilds.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    title: 'AI-Led Legacy System Transformation',
    description:
      'Introduce AI layers on top of legacy systems to modernise operations without disrupting core infrastructure.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'AI Event-Driven Architectures',
    description:
      'Build systems where AI responds to real-time events — calls, messages, transactions — and coordinates actions across services.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h5l3 9 4-18 3 9h5" />
      </svg>
    ),
    title: 'AI Observability & System Intelligence',
    description:
      'Implement AI-assisted monitoring, tracing, and analysis to understand system behaviour and improve performance over time.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
      </svg>
    ),
    title: 'AI Voice & Conversational Systems',
    description:
      'Design and integrate AI voice and messaging agents that handle real customer interactions and business workflows.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'AI-Centric Architecture & Delivery',
    description:
      'Lead projects where AI is a core system component — ensuring it\'s designed, integrated, and deployed correctly in production.',
  },
]

export default function Features() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#111113] mb-6">
            <span className="text-xs font-medium text-[#71717a] tracking-wide uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-4 leading-tight">
            Comprehensive AI Solutions for Modern Business
          </h2>
          <p className="text-[#71717a] text-lg leading-relaxed">
            From intelligent automation to production-grade AI agents — we build the systems that keep your business ahead.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  return (
    <div
      className="group relative rounded-2xl border border-[#27272a] bg-[#111113] p-6 overflow-hidden transition-all duration-300 hover:border-[#a855f7]/40 hover:bg-[#141417]"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(168,85,247,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Icon */}
      <div className="relative mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#18181b] border border-[#27272a] text-[#a855f7] group-hover:border-[#a855f7]/40 transition-colors duration-300">
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="relative text-[#fafafa] font-semibold text-base mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="relative text-[#71717a] text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}
