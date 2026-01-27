import Image from "next/image";
import Link from "next/link";

const ACCENT = "text-[color:var(--accent)]";
const ACCENT_BG = "bg-[color:var(--accent)]";
const ACCENT_RING = "focus-visible:outline-[color:var(--accent)]";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className={`text-[13px] tracking-[0.18em] ${ACCENT}`}>{children}</span>
  );
}

function ButtonPrimary({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${ACCENT_BG} ${ACCENT_RING}`}
    >
      {children}
    </Link>
  );
}

function ButtonGhost({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.endsWith(".pdf"); // 👈 open PDFs in new tab (even if local)

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-[15px] font-medium text-black shadow-sm transition hover:bg-black/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${ACCENT_RING}`}
    >
      {children}
    </Link>
  );
}


function SoftCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-black/10 bg-[#f5f5f7] p-6 
      shadow-[0_1px_0_rgba(0,0,0,0.04)] 
      transition-all duration-200 ease-out
      hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      ${className}`}
    >
      {children}
    </div>
  );
}

function TrustedBy() {
  const logos = [
    {
      src: "/logos/polymarket.png",
      alt: "Polymarket",
      href: "https://polymarket.com",
    },
    {
      src: "/logos/wispr.jpg",
      alt: "Wispr Flow",
      href: "https://wispr.ai",
    },
    {
      src: "/logos/turbo.jpg",
      alt: "Turbo AI",
      href: "https://turbo.ai",
    },
    {
      src: "/logos/series.png",
      alt: "Series",
      href: "https://series.so",
    },
    {
      src: "/logos/swsh.png",
      alt: "SWSH",
      href: "https://www.joinswsh.com",
    },
  ];

  return (
    <div className="mt-12">
      <div className="mb-6 text-[15px] font-semibold text-black/70">
        Trusted by
      </div>

      {/* 1 row on desktop, wraps on mobile */}
      <div className="flex flex-wrap items-center gap-x-10 gap-y-8 md:flex-nowrap">
        {logos.map((l) => (
          <a
            key={l.alt}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex"
            aria-label={l.alt}
          >
            <div className="relative h-9 w-[160px] opacity-100 transition duration-200 ease-out will-change-transform group-hover:scale-[1.10] group-hover:-translate-y-[1px] md:h-10 md:w-[170px]">
              <Image src={l.src} alt={l.alt} fill className="object-contain" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function SelectedWorkTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-[13px] font-semibold tracking-[0.22em] text-black/40">
        SELECTED WORK
      </div>
      <h2 className="mt-3 text-[40px] font-semibold tracking-tight md:text-[48px]">
        Proof of work.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Card 1 */}
        <Link
          href="/work#polymarket"
          className="group rounded-3xl border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)]"
        >
          <div className="text-[26px] font-semibold tracking-tight">
            Polymarket
          </div>
          <div className="mt-2 text-[18px] leading-relaxed text-black/60">
            Prediction market platform for real-world events.
          </div>

          <div className="mt-6 inline-flex rounded-full bg-[#eff6ff] px-5 py-2 text-[15px] font-medium text-blue-600">
            Generated 4M+ views in 30 days
          </div>

          <div className="mt-8 flex items-center gap-2 text-[16px] font-medium text-black/80">
            View project{" "}
            <span className="transition group-hover:translate-x-1">→</span>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href="/work#wispr-flow"
          className="group rounded-3xl border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)]"
        >
          <div className="text-[26px] font-semibold tracking-tight">
            Wispr Flow
          </div>
          <div className="mt-2 text-[18px] leading-relaxed text-black/60">
            AI-powered productivity tool for modern professionals.
          </div>

          <div className="mt-6 inline-flex rounded-full bg-[#eff6ff] px-5 py-2 text-[15px] font-medium text-blue-600">
            Drove 100+ signups from a single video
          </div>

          <div className="mt-8 flex items-center gap-2 text-[16px] font-medium text-black/80">
            View project{" "}
            <span className="transition group-hover:translate-x-1">→</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-tight md:text-[64px]">
                I turn attention into growth
                <br />
                for modern brands.
              </h1>

              <div className="mt-5">
                <Pill>MARKETING • GROWTH • UGC • ANALYTICS</Pill>
              </div>

              <div className="mt-8 space-y-4 text-[18px] leading-relaxed text-black/70">
                <p className="text-black/80">Hey, I’m Diego.</p>
                <p>A globally raised, American-Peruvian marketing creator.</p>
                <p>
                  I work with startups and emerging products creating short-form
                  content that has generated millions of views.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonPrimary href="/work">View My Work</ButtonPrimary>
                <ButtonGhost href="/resume/Diego_Limo_Resume.pdf">
                  Resume
                </ButtonGhost>
                <ButtonGhost href="/contact">Contact</ButtonGhost>
              </div>
            </div>

            {/* Hero image stack */}
            <div className="relative">
              <div className="relative mx-auto h-[320px] w-[360px] max-w-full">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(140deg, rgba(79,70,229,0.18), rgba(79,70,229,0.05))",
                    transform: "rotate(-4deg)",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(140deg, rgba(79,70,229,0.10), rgba(79,70,229,0.04))",
                    transform: "rotate(6deg)",
                  }}
                />
                <div className="absolute inset-0 rounded-3xl border border-black/10 bg-[#f5f5f7] shadow-sm">
                  <div className="flex h-full items-center justify-center p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/image1.png"
                        alt="Profile photo"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="border-t border-black/5" />

        {/* ABOUT */}
<section className="mx-auto max-w-6xl px-6 py-16">
  <div className="grid gap-12 md:grid-cols-2 items-start">
    {/* LEFT */}
    <div className="space-y-10">
      <div>
        <h2 className="text-[40px] font-semibold tracking-tight md:text-[52px]">
          About
        </h2>

        <div className="mt-6 space-y-5 text-[18px] leading-relaxed text-black/70">
          <p>
            I’m an <strong>International Business student at Temple University</strong> with experience across startups, sports partnerships, and digital media.
          </p>
          <p>
            I’ve lived in five countries and traveled to 45+, giving me a <strong>global perspective</strong> and <strong>strong adaptability</strong>. I’m driven by building and marketing ideas that connect people across cultures.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-semibold">Sports & Teamwork</h3>
        <p className="mt-3 text-black/70">
          I’ve played <strong>semi-pro soccer</strong>, which taught me discipline,
          communication, and composure under pressure.
        </p>

        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f7]">
          <Image
            src="/images/soccer.png"
            alt="Soccer"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="space-y-8">
      <SoftCard>
        <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/image2.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </SoftCard>

      <SoftCard>
        <div className="space-y-3 text-[16px] text-black/70">
          <div>
            <span className="font-semibold text-black/65">Location:</span>{" "}
            Based in the U.S. | Open to relocate
          </div>
          <div>
            <span className="font-semibold text-black/65">Languages:</span>{" "}
            English, Spanish, Portuguese (intermediate), Japanese (beginner)
          </div>
        </div>
      </SoftCard>
    </div>
  </div>
</section>


        <div className="border-t border-black/5" />

        {/* IMPACT / NUMBERS */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-[32px] font-semibold tracking-tight">
            Impact: Numbers That Matter
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SoftCard className="bg-white">
              <div className={`text-[36px] font-semibold ${ACCENT}`}>16M+</div>
              <div className="mt-1 text-[14px] text-black/65">
                total views across product campaigns
              </div>
            </SoftCard>

            <SoftCard className="bg-white">
              <div className={`text-[36px] font-semibold ${ACCENT}`}>4M+</div>
              <div className="mt-1 text-[14px] text-black/65">
                views generated in first month at Polymarket
              </div>
            </SoftCard>

            <SoftCard className="bg-white">
              <div className={`text-[36px] font-semibold ${ACCENT}`}>12M+</div>
              <div className="mt-1 text-[14px] text-black/65">
                views in two months for Wispr Flow
              </div>
            </SoftCard>

            <SoftCard className="bg-white">
              <div className={`text-[36px] font-semibold ${ACCENT}`}>
                Multiple Videos
              </div>
              <div className="mt-1 text-[14px] text-black/65">
                above 100K views
              </div>
            </SoftCard>
          </div>

          <TrustedBy />
        </section>

        <div className="border-t border-black/5" />
        <SelectedWorkTeaser />

        <footer className="border-t border-black/5 py-10">
          <div className="mx-auto max-w-6xl px-6 text-sm text-black/50">
            © {new Date().getFullYear()} Diego Limo
          </div>
        </footer>
      </main>
    </div>
  );
}
