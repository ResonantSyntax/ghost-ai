export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual panel */}
          <div className="relative">
            <div
              className="relative rounded-2xl border border-[#27272a] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #111113 0%, #0e0e12 100%)' }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 30% 40%, rgba(124,58,237,0.15) 0%, transparent 60%)',
                }}
              />

              <div className="relative p-8 md:p-10">
                {/* Quote mark */}
                <svg
                  className="mb-6 text-[#a855f7]/40"
                  width="40" height="32"
                  viewBox="0 0 40 32"
                  fill="currentColor"
                >
                  <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 3.2C12.267 4.8 8.8 8.533 8 14.4H16V32H0zm24 0V19.2C24 8.533 29.333 2.133 40 0l2.4 3.2C36.267 4.8 32.8 8.533 32 14.4H40V32H24z" />
                </svg>

                <blockquote className="text-xl md:text-2xl font-medium text-[#fafafa] leading-relaxed mb-8">
                  "Ghost AI didn't just automate our processes — they fundamentally changed how our systems think. The AI agents they built handle decisions we used to spend hours on, every single day."
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                  >
                    SC
                  </div>
                  <div>
                    <div className="text-[#fafafa] font-semibold text-sm">Sarah Chen</div>
                    <div className="text-[#71717a] text-sm">CTO, Nexus Operations</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-10 pt-8 border-t border-[#27272a] grid grid-cols-3 gap-4">
                  {[
                    { value: '87%', label: 'Cost reduction' },
                    { value: '4×', label: 'Faster ops' },
                    { value: '0', label: 'Manual errors' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-bold text-[#a855f7]">{stat.value}</div>
                      <div className="text-xs text-[#71717a] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl border border-[#27272a] text-xs font-medium text-[#a1a1aa] hidden md:block"
              style={{ background: '#111113' }}
            >
              ✦ Production-Ready AI
            </div>
          </div>

          {/* Right — CTA copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#111113] mb-6">
              <span className="text-xs font-medium text-[#71717a] tracking-wide uppercase">
                Why Ghost AI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight mb-6">
              We Build AI Systems That Actually Work in Production
            </h2>

            <p className="text-[#71717a] text-lg leading-relaxed mb-8">
              Most AI projects fail at the integration layer. We specialise in building AI systems that connect to your real infrastructure, handle your actual edge cases, and deliver measurable results from day one.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {[
                'Production-first architecture — designed to scale with your business',
                'Deep integration with your existing systems and workflows',
                'AI agents that handle real decisions, not just demos',
                'Ongoing support and system intelligence built-in',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold text-sm transition-colors duration-150 no-underline text-center shadow-lg shadow-purple-900/25"
              >
                Start Your AI Project
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 rounded-xl border border-[#27272a] hover:border-[#3f3f46] text-[#a1a1aa] hover:text-[#fafafa] font-semibold text-sm transition-all duration-150 no-underline text-center"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
