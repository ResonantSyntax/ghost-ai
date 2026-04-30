import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#111113] mb-6">
            <span className="text-xs font-medium text-[#71717a] tracking-wide uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-4 leading-tight">
            Ready to Build Something Intelligent?
          </h2>
          <p className="text-[#71717a] text-lg leading-relaxed">
            Tell us about your project and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#fafafa] font-semibold text-lg mb-3">Let's talk</h3>
              <p className="text-[#71717a] text-sm leading-relaxed">
                Whether you have a clear spec or just a problem you're trying to solve — we'd love to hear from you. No sales scripts, just a real conversation about what you need.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <ContactLink
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="hello@ghost-ai.co"
                href="mailto:hello@ghost-ai.co"
              />
              <ContactLink
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
                label="LinkedIn"
                href="https://linkedin.com"
                external
              />
              <ContactLink
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                }
                label="GitHub"
                href="https://github.com"
                external
              />
            </div>

            {/* Response time note */}
            <div className="rounded-xl border border-[#27272a] bg-[#111113] p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#34d399]" />
                <span className="text-sm font-medium text-[#fafafa]">Typically responds within 24 hours</span>
              </div>
              <p className="text-xs text-[#71717a]">We're based in the UK and cover GMT timezone.</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl border border-[#27272a] bg-[#111113] p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[360px]">
                <div className="w-16 h-16 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#fafafa]">Message Sent!</h3>
                <p className="text-[#71717a] text-sm max-w-xs">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#27272a] bg-[#111113] p-6 md:p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>
                <FormField
                  label="Company"
                  type="text"
                  placeholder="Your company name"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#a1a1aa] uppercase tracking-wider">
                    Message <span className="text-[#a855f7]">*</span>
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#27272a] bg-[#18181b] text-[#fafafa] text-sm placeholder-[#3f3f46] outline-none resize-none transition-colors duration-150 focus:border-[#a855f7]/50 focus:bg-[#1a1a1e]"
                    style={{ fontFamily: 'inherit' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold text-sm transition-colors duration-150 shadow-lg shadow-purple-900/25"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-[#52525b]">
                  By submitting, you agree to be contacted about your enquiry. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, type, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-[#a1a1aa] uppercase tracking-wider">
        {label} {required && <span className="text-[#a855f7]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-[#27272a] bg-[#18181b] text-[#fafafa] text-sm placeholder-[#3f3f46] outline-none transition-colors duration-150 focus:border-[#a855f7]/50 focus:bg-[#1a1a1e]"
      />
    </div>
  )
}

function ContactLink({ icon, label, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#a855f7] transition-colors no-underline group"
    >
      <span className="flex-shrink-0 w-8 h-8 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-center text-[#71717a] group-hover:border-[#a855f7]/40 group-hover:text-[#a855f7] transition-all duration-150">
        {icon}
      </span>
      {label}
    </a>
  )
}
