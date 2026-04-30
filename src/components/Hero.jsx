export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e4e4e7] bg-[#f4f4f5] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#09090b]" />
            <span className="text-xs font-medium text-[#3f3f46] tracking-wide uppercase">
              AI Software Development Consultancy
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#09090b] leading-[1.05] mb-6">
            Build Smarter.{' '}
            <span className="italic font-light">Ship Faster.</span>
            <br />
            Operate Intelligently.
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-[#71717a] max-w-2xl mx-auto leading-relaxed mb-10">
            We design and integrate AI systems that transform how your business operates — from intelligent automation to production-grade AI agents and data platforms.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#09090b] hover:bg-[#3f3f46] text-white font-semibold text-sm transition-colors duration-150 no-underline"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#e4e4e7] hover:border-[#09090b] text-[#3f3f46] hover:text-[#09090b] font-semibold text-sm transition-all duration-150 no-underline"
            >
              Explore Services →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '11+', label: 'Service Areas' },
              { value: '100%', label: 'AI-Native' },
              { value: '∞', label: 'Scalability' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl md:text-3xl font-bold text-[#09090b]">{stat.value}</span>
                <span className="text-xs text-[#a1a1aa] tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div
            className="absolute inset-x-0 -top-10 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, white, transparent)', zIndex: 10 }}
          />
          <div
            className="relative rounded-2xl border border-[#e4e4e7] overflow-hidden bg-[#fafafa]"
            style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.08)' }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#e4e4e7] bg-white">
              <div className="w-3 h-3 rounded-full bg-[#e4e4e7]" />
              <div className="w-3 h-3 rounded-full bg-[#e4e4e7]" />
              <div className="w-3 h-3 rounded-full bg-[#e4e4e7]" />
              <div className="flex-1 mx-4">
                <div className="mx-auto w-48 h-6 rounded-md bg-[#f4f4f5] flex items-center justify-center">
                  <span className="text-[10px] text-[#a1a1aa]">ghost-ai.app / dashboard</span>
                </div>
              </div>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[340px]">
              {/* Sidebar */}
              <div className="col-span-2 flex flex-col gap-3">
                <div className="h-8 rounded-lg bg-[#09090b] flex items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="h-2 w-12 rounded-full bg-white/40" />
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-7 rounded-lg bg-white border border-[#e4e4e7] flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#d4d4d8]" />
                    <div className="h-2 rounded-full bg-[#e4e4e7]" style={{ width: `${40 + i * 10}%` }} />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-10 grid grid-rows-2 gap-4">
                {/* Metric cards */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Active Agents', val: '24' },
                    { label: 'Tasks Processed', val: '18.4K' },
                    { label: 'Avg Response', val: '142ms' },
                    { label: 'Accuracy', val: '99.2%' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-white border border-[#e4e4e7] p-4">
                      <div className="text-[10px] text-[#a1a1aa] mb-1">{m.label}</div>
                      <div className="text-xl font-bold text-[#09090b]">{m.val}</div>
                      <div className="mt-2 h-1 rounded-full bg-[#f4f4f5] overflow-hidden">
                        <div className="h-full rounded-full w-3/4 bg-[#09090b]/20" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 rounded-xl bg-white border border-[#e4e4e7] p-4">
                    <div className="text-[10px] text-[#a1a1aa] mb-3">Agent Activity</div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${h}%`,
                            background: i === 10 ? '#09090b' : '#e4e4e7',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border border-[#e4e4e7] p-4 flex flex-col gap-2">
                    <div className="text-[10px] text-[#a1a1aa] mb-1">Live Events</div>
                    {[
                      'Order processed',
                      'Agent triggered',
                      'Data synced',
                      'Report generated',
                    ].map((ev, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#09090b] flex-shrink-0" />
                        <div className="text-[10px] text-[#71717a]">{ev}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: 'linear-gradient(to top, white, transparent)' }}
          />
        </div>
      </div>
    </section>
  )
}
