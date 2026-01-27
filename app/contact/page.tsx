import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-[48px] font-semibold">Contact</h1>

      <p className="mt-6 text-black/70">
        Let’s connect — whether it’s work, collaboration, or ideas.
      </p>

      <div className="mt-8 space-y-2 text-[18px]">
        <p>Email: <strong>diegolimo05@gmail.com</strong></p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/diegolimo"
            target="_blank"
            className="underline"
          >
            linkedin.com/in/diegolimo
          </a>
        </p>
      </div>

      <Link href="/" className="inline-block mt-10 underline text-black/60">
        ← Back home
      </Link>
    </div>
  );
}
