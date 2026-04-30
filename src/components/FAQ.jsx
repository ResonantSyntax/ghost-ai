import { useState } from 'react'

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with mid-market and enterprise businesses across all sectors — from professional services and e-commerce to logistics, finance, and SaaS companies. If you have complex operational workflows or fragmented systems, we can help.',
  },
  {
    question: 'How long does a typical AI integration project take?',
    answer: 'Timelines vary depending on scope, but most engagements run 8–16 weeks from discovery to production deployment. We move fast by front-loading architecture decisions and building against your real infrastructure from day one.',
  },
  {
    question: 'Do I need to replace my existing systems to work with you?',
    answer: 'No. We specialise in building AI layers on top of existing infrastructure — ERP, CRM, legacy systems, and everything in between. The goal is to modernise your operations without disrupting what already works.',
  },
  {
    question: 'What does "AI Operational Agents" mean in practice?',
    answer: 'AI agents are software systems that can observe your business data, make decisions, and take actions — automatically. For example, an agent might process incoming orders, check inventory across systems, initiate fulfilment, and trigger customer notifications, all without human intervention.',
  },
  {
    question: 'How do you ensure AI decisions are reliable and auditable?',
    answer: 'Every system we build includes observability as a first-class concern — full logging, tracing, and explainability for AI decisions. We design for auditability from the start, not as an afterthought. You always know what the system did and why.',
  },
  {
    question: 'Do you offer ongoing support after the initial build?',
    answer: 'Yes. We offer ongoing retainers for system monitoring, model updates, performance tuning, and feature expansion. Most clients find that ongoing support dramatically increases the value extracted from their AI systems over time.',
  },
  {
    question: 'How is Ghost AI different from a general software agency?',
    answer: "AI is not a feature we bolt on — it's the core of everything we build. Our entire approach is designed around AI-native architecture: how models connect to systems, how agents are orchestrated, how data flows in real time. We don't adapt a traditional dev playbook to include AI. We start from AI and build outward.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e4e4e7] bg-[#f4f4f5] mb-6">
              <span className="text-xs font-medium text-[#3f3f46] tracking-wide uppercase">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#09090b] leading-tight mb-4">
              Common Questions
            </h2>
            <p className="text-[#71717a] text-lg leading-relaxed mb-8">
              Everything you need to know about working with Ghost AI.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#09090b] hover:text-[#3f3f46] transition-colors no-underline"
            >
              Still have questions? Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-[#e4e4e7]">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ faq, open, onToggle }) {
  return (
    <div className="py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer bg-transparent border-0 p-0"
      >
        <span className="text-base font-medium text-[#09090b] group-hover:text-[#3f3f46] transition-colors leading-snug">
          {faq.question}
        </span>
        <span
          className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border border-[#e4e4e7] bg-[#f4f4f5] flex items-center justify-center text-[#71717a] transition-all duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? '500px' : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.25s ease',
        }}
      >
        <p className="pt-4 text-[#71717a] text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}
