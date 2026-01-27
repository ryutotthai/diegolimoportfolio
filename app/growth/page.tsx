export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title */}
        <section>
          <h1 className="text-[54px] font-semibold leading-[1.05] tracking-tight">
            Growth playbook
          </h1>
          <p className="mt-4 text-[20px] leading-relaxed text-black/60">
            How I think about content, experimentation, and traction.
          </p>
        </section>

        {/* Main layout */}
        <section className="mt-16 grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* Left column */}
          <div className="space-y-16">
            <div>
              <h2 className="text-[30px] font-semibold tracking-tight">
                My growth philosophy
              </h2>

              <div className="mt-5 space-y-5 text-[18px] leading-relaxed text-black/65">
                <p>
                  I treat content like a system. I don't believe in "going viral"
                  by accident. Every post is a test designed to gather data on
                  what resonates with a specific audience.
                </p>
                <p>
                  My approach is centered on high-volume experimentation. By
                  testing multiple hooks, formats, and angles, I can quickly
                  identify the "winning" combination that drives the highest
                  retention and conversion.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[30px] font-semibold tracking-tight">
                How I build content
              </h2>

              <div className="mt-5 space-y-5 text-[18px] leading-relaxed text-black/65">
                <p>
                  Everything starts with the <strong>Hook</strong>. If you can't
                  stop the scroll in the first 1.5 seconds, the rest of the video
                  doesn't matter. 
                </p>
                <p>
                  After the hook, I focus on{" "}
                  <strong>Platform-native Storytelling</strong>. Content
                  shouldn't feel like an ad; it should feel like a recommendation
                  from a friend. This means using native fonts, trending but
                  relevant audio, and fast-paced editing that matches the user's
                  attention span.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[30px] font-semibold tracking-tight">
                How I test and improve
              </h2>

              <div className="mt-5 space-y-5 text-[18px] leading-relaxed text-black/65">
                <p>
                  I iterate based on <strong>Watch Time</strong>. If a video has
                  a sharp drop-off at the 5-second mark, I rewrite the intro. If
                  it has high retention but low engagement, I test different
                  <strong> Calls to Action (CTAs)</strong>.
                </p>
                <p>
                  Every week, I review my content,
                identifying patterns in the top 10% and bottom 10%
                  of performers.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <aside className="space-y-10">
            {/* What I look at */}
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="text-[13px] font-semibold tracking-[0.22em] text-black/45">
                WHAT I LOOK AT
              </div>

              <div className="mt-6 space-y-7">
                <div>
                  <div className="text-[18px] font-semibold">Watch time</div>
                  <div className="mt-1 text-[16px] text-black/60">
                    The ultimate signal of value.
                  </div>
                </div>

                <div>
                  <div className="text-[18px] font-semibold">Retention</div>
                  <div className="mt-1 text-[16px] text-black/60">
                    Where are we losing people?
                  </div>
                </div>

                <div>
                  <div className="text-[18px] font-semibold">Engagement</div>
                  <div className="mt-1 text-[16px] text-black/60">
                    Shares and saves over likes.
                  </div>
                </div>

                <div>
                  <div className="text-[18px] font-semibold">Conversions</div>
                  <div className="mt-1 text-[16px] text-black/60">
                    Real users, not just views.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
