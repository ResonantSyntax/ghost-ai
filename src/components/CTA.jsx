export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — quote panel */}
          <div className="relative">
            <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-8 md:p-10">
              <svg className="mb-6 text-[#d4d4d8]" width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 3.2C12.267 4.8 8.8 8.533 8 14.4H16V32H0zm24 0V19.2C24 8.533 29.333 2.133 40 0l2.4 3.2C36.267 4.8 32.8 8.533 32 14.4H40V32H24z" />
              </svg>

              <blockquote className="text-xl md:text-2xl font-medium text-[#09090b] leading-relaxed mb-8">
                "Ghost AI didn't just automate our processes — they fundamentally changed how our systems think. The AI agents they built handle decisions we used to spend hours on, every single day."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#09090b] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  SC
                </div>
                <div>
                  <div className="text-[#09090b] font-semibold text-sm">Sarah Chen</div>
                  <div className="text-[#71717a] text-sm">CTO, Nexus Operations</div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#e4e4e7] grid grid-cols-3 gap-4">
                {[
                  { value: '87%', label: 'Cost reduction' },
                  { value: '4×', label: 'Faster ops' },
                  { value: '0', label: 'Manual errors' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-[#09090b]">{stat.value}</div>
                    <div className="text-xs text-[#71717a] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — CTA copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e4e4e7] bg-[#f4f4f5] mb-6">
              <span className="text-xs font-medium text-[#3f3f46] tracking-wide uppercase">Why Ghost AI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#09090b] leading-tight mb-6">
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
                <li key={point} className="flex items-start gap-3 text-sm text-[#52525b]">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-[#e4e4e7] bg-[#f4f4f5] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-[#09090b] hover:bg-[#3f3f46] text-white font-semibold text-sm transition-colors duration-150 no-underline text-center"
              >
                Start Your AI Project
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 rounded-xl border border-[#e4e4e7] hover:border-[#09090b] text-[#52525b] hover:text-[#09090b] font-semibold text-sm transition-all duration-150 no-underline text-center"
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
