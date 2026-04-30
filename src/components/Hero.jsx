export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(168,85,247,0.08) 0%, transparent 60%)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
            <span className="text-xs font-medium text-[#a855f7] tracking-wide uppercase">
              AI Software Development Consultancy
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.05] mb-6">
            Build Smarter.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ship Faster.
            </span>
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold text-sm transition-all duration-150 no-underline shadow-lg shadow-purple-900/25 hover:shadow-purple-900/40"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-[#27272a] hover:border-[#3f3f46] text-[#a1a1aa] hover:text-[#fafafa] font-semibold text-sm transition-all duration-150 no-underline bg-[#111113] hover:bg-[#18181b]"
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
                <span className="text-2xl md:text-3xl font-bold text-[#fafafa]">{stat.value}</span>
                <span className="text-xs text-[#71717a] tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div
            className="absolute inset-x-0 -top-10 h-32 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #08080a, transparent)',
              zIndex: 10,
            }}
          />
          <div
            className="relative rounded-2xl border border-[#27272a] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #111113 0%, #0d0d10 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.1), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.1)',
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#1f1f23]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div className="flex-1 mx-4">
                <div className="mx-auto w-48 h-6 rounded-md bg-[#1f1f23] flex items-center justify-center">
                  <span className="text-[10px] text-[#71717a]">ghost-ai.app / dashboard</span>
                </div>
              </div>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[340px]">
              {/* Sidebar */}
              <div className="col-span-2 flex flex-col gap-3">
                <div className="h-8 rounded-lg bg-[#a855f7]/20 border border-[#a855f7]/20 flex items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#a855f7]" />
                  <div className="h-2 w-12 rounded-full bg-[#a855f7]/60" />
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-7 rounded-lg bg-[#18181b] flex items-center px-3 gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3f3f46]" />
                    <div className="h-2 rounded-full bg-[#3f3f46]" style={{ width: `${40 + i * 10}%` }} />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-10 grid grid-rows-2 gap-4">
                {/* Top row */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Active Agents', val: '24', color: '#a855f7' },
                    { label: 'Tasks Processed', val: '18.4K', color: '#22d3ee' },
                    { label: 'Avg Response', val: '142ms', color: '#34d399' },
                    { label: 'Accuracy', val: '99.2%', color: '#f59e0b' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-[#18181b] border border-[#27272a] p-4">
                      <div className="text-[10px] text-[#71717a] mb-1">{m.label}</div>
                      <div className="text-xl font-bold" style={{ color: m.color }}>{m.val}</div>
                      <div className="mt-2 h-1 rounded-full bg-[#27272a] overflow-hidden">
                        <div className="h-full rounded-full w-3/4" style={{ background: m.color, opacity: 0.6 }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Activity chart */}
                  <div className="col-span-2 rounded-xl bg-[#18181b] border border-[#27272a] p-4">
                    <div className="text-[10px] text-[#71717a] mb-3">Agent Activity</div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${h}%`,
                            background: i === 10
                              ? 'linear-gradient(to top, #7c3aed, #a855f7)'
                              : 'rgba(168,85,247,0.2)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Recent events */}
                  <div className="rounded-xl bg-[#18181b] border border-[#27272a] p-4 flex flex-col gap-2">
                    <div className="text-[10px] text-[#71717a] mb-1">Live Events</div>
                    {[
                      { color: '#34d399', text: 'Order processed' },
                      { color: '#a855f7', text: 'Agent triggered' },
                      { color: '#22d3ee', text: 'Data synced' },
                      { color: '#f59e0b', text: 'Report generated' },
                    ].map((ev, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ev.color }} />
                        <div className="text-[10px] text-[#71717a]">{ev.text}</div>
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
            style={{
              background: 'linear-gradient(to top, #08080a, transparent)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
