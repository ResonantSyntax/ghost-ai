import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e4e4e7] bg-[#f4f4f5] mb-6">
            <span className="text-xs font-medium text-[#3f3f46] tracking-wide uppercase">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#09090b] mb-4 leading-tight">
            Ready to Build Something Intelligent?
          </h2>
          <p className="text-[#71717a] text-lg leading-relaxed">
            Tell us about your project and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#09090b] font-semibold text-lg mb-3">Let's talk</h3>
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

            <div className="rounded-xl border border-[#e4e4e7] bg-[#fafafa] p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#09090b]" />
                <span className="text-sm font-medium text-[#09090b]">Typically responds within 24 hours</span>
              </div>
              <p className="text-xs text-[#71717a]">We're based in the UK and cover GMT timezone.</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[360px]">
                <div className="w-16 h-16 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#09090b]">Message Sent!</h3>
                <p className="text-[#71717a] text-sm max-w-xs">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#e4e4e7] bg-white p-6 md:p-8 flex flex-col gap-5"
                style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Name" type="text" placeholder="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <FormField label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>
                <FormField label="Company" type="text" placeholder="Your company name" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#71717a] uppercase tracking-wider">
                    Message <span className="text-[#09090b]">*</span>
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] text-sm placeholder-[#d4d4d8] outline-none resize-none transition-colors duration-150 focus:border-[#09090b] focus:bg-white"
                    style={{ fontFamily: 'inherit' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#09090b] hover:bg-[#3f3f46] text-white font-semibold text-sm transition-colors duration-150"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-[#a1a1aa]">
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
      <label className="text-xs font-medium text-[#71717a] uppercase tracking-wider">
        {label} {required && <span className="text-[#09090b]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] text-sm placeholder-[#d4d4d8] outline-none transition-colors duration-150 focus:border-[#09090b] focus:bg-white"
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
      className="flex items-center gap-3 text-sm text-[#71717a] hover:text-[#09090b] transition-colors no-underline group"
    >
      <span className="flex-shrink-0 w-8 h-8 rounded-lg border border-[#e4e4e7] bg-[#f4f4f5] flex items-center justify-center text-[#71717a] group-hover:border-[#09090b] group-hover:text-[#09090b] transition-all duration-150">
        {icon}
      </span>
      {label}
    </a>
  )
}
