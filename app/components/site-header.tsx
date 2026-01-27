import Link from "next/link";

const ACCENT = "text-[color:var(--accent)]";

export default function SiteHeader() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Growth", href: "/growth" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-[18px] font-semibold tracking-tight">
          Diego Limo
        </Link>

        <nav className="hidden gap-8 text-[16px] text-black/70 md:flex">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`transition hover:text-black ${
                it.label === "Home" ? ACCENT : ""
              }`}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="text-[13px] text-black/60 md:hidden">Menu</div>
      </div>
    </header>
  );
}
