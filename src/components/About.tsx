import { site } from "@/lib/site";

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
          {site.bio}
        </p>
        <p className="mt-6 font-mono text-[13px] text-ink-faint">
          Currently in {site.location}
        </p>
      </div>

      <div>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          Elsewhere
        </p>
        {site.social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-line py-3 text-base transition-colors hover:text-accent"
          >
            {s.label}
            <span className="text-ink-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        ))}
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-line py-3 text-base transition-colors hover:text-accent"
        >
          Résumé
          <span className="text-ink-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
