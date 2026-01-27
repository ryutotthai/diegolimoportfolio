import Image from "next/image";

type ResultItem = { value: string; label: string };

type Media =
  | { type: "instagram"; url: string }
  | { type: "images"; images: { src: string; alt: string }[] };

type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  workedOn: string;
  did: string[];
  results: ResultItem[];
  media: Media;
};

const projects: Project[] = [
  {
    slug: "polymarket",
    name: "Polymarket",
    tagline: "Prediction market platform for real-world events.",
    role: "UGC Creator",
    workedOn:
      "Developed and executed a short-form video strategy to drive brand awareness and user acquisition.",
    did: [
      "Created 30+ high-hook UGC videos explaining complex prediction markets",
      "Analyzed retention metrics to iterate on hook styles",
      "Managed community engagement across Instagram and TikTok",
    ],
    results: [
      { value: "4M+", label: "total organic views across all platforms" },
      { value: "78%", label: "average watch time across 30+ videos" },
      { value: "Drove", label: "100+ verified new user signups" },
    ],
    media: {
      type: "instagram",
      url: "https://www.instagram.com/reel/DS5l1PnEvRT/",
    },
  },
  {
    slug: "wispr-flow",
    name: "Wispr Flow",
    tagline: "AI-powered productivity tool for modern professionals.",
    role: "UGC Creator",
    workedOn:
      "Focused on positioning Wispr Flow as the essential tool for creators and professionals who think out loud.",
    did: [
      "Created funny, relatable short-form videos that made Wispr's product feel approachable and shareable",
      "A/B tested captions and CTAs to optimize conversion rate",
      "Collaborated with the product team to highlight key features based on user feedback",
    ],
    results: [
      { value: "12M+", label: "total views within the two month campaign" },
      {
        value: "15%",
        label: "increase in weekly active users during the peak content period",
      },
      { value: "100+", label: "signups from a single high-performing video" },
    ],
    media: {
      type: "images",
      images: [
        { src: "/work/image1.png", alt: "Wispr proof screenshot 1" },
        { src: "/work/image2.png", alt: "Wispr proof screenshot 2" },
      ],
    },
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-[3px] h-5 w-5 shrink-0 text-blue-600"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramEmbed({ url }: { url: string }) {
  const normalized = url.endsWith("/") ? url : `${url}/`;
  const embedUrl = `${normalized}embed/`;

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="relative aspect-[9/16] w-full">
        <iframe
          title="Instagram Reel"
          src={embedUrl}
          className="absolute inset-0 h-full w-full"
          scrolling="no"
          allow="encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProofPhones({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((img, idx) => (
        <div
          key={img.src}
          className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        >
          <div className="relative aspect-[9/16] w-full bg-black/[0.03]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={idx === 0}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** NEW: Results card laid out in one row (3 columns on desktop) */
function ResultsRow({ results }: { results: ResultItem[] }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="text-[18px] font-semibold text-black/90">Results</div>

      <div className="mt-6 grid gap-7 sm:grid-cols-3">
        {results.map((r) => (
          <div key={r.label}>
            <div className="text-[34px] font-semibold tracking-tight text-blue-600">
              {r.value}
            </div>
            <div className="mt-2 text-[16px] leading-relaxed text-black/55">
              {r.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectSection({ p }: { p: Project }) {
  return (
    <section id={p.slug} className="scroll-mt-28 py-16">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-[40px] font-semibold tracking-tight text-black">
            {p.name}
          </h3>
          <p className="mt-2 text-[18px] leading-relaxed text-black/60">
            {p.tagline}
          </p>
        </div>

        <div className="md:text-right">
          <div className="text-[12px] font-semibold tracking-[0.22em] text-black/35">
            ROLE
          </div>
          <div className="mt-2 text-[18px] font-medium text-black/85">
            {p.role}
          </div>
        </div>
      </div>

      <div className="mt-8 h-px w-full bg-black/10" />
      {/* Main content */}
<div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
  {/* Left */}
  <div>
    <div className="text-[18px] font-semibold text-black/90">
      What I worked on
    </div>
    <p className="mt-3 text-[18px] leading-relaxed text-black/65">
      {p.workedOn}
    </p>

    <div className="mt-10 text-[18px] font-semibold text-black/90">
      What I did
    </div>

    <ul className="mt-5 space-y-5">
      {p.did.map((item) => (
        <li key={item} className="flex gap-4">
          <CheckIcon />
          <span className="text-[18px] leading-relaxed text-black/70">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>

  {/* Right */}
  <div>
    {p.media.type === "instagram" && (
      <>
        <div className="text-[18px] font-semibold text-black/90">
          My work
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <InstagramEmbed url={p.media.url} />
          {p.name === "Polymarket" && (
            <InstagramEmbed url="https://www.instagram.com/reel/DTqEQB3keMW/" />
          )}
        </div>
      </>
    )}

    {p.media.type === "images" && (
      <>
        <div className="text-[18px] font-semibold text-black/90">
          My work
        </div>
        <div className="mt-4">
          <ProofPhones images={p.media.images} />
        </div>
      </>
    )}
  </div>
</div>

{/* ✅ Results now span full width */}
<div className="mt-12">
  <ResultsRow results={p.results} />
</div>

    </section>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-[48px] font-semibold tracking-tight text-black md:text-[56px]">
          Work
        </h1>
        <p className="mt-4 max-w-2xl text-[20px] leading-relaxed text-black/55">
          A selection of projects where I’ve helped products drive attention,
          engagement, and growth.
        </p>

        <div className="mt-8 divide-y divide-black/10">
          {projects.map((p) => (
            <ProjectSection key={p.name} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
