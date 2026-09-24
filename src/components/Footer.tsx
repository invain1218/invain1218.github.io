import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-10 font-mono text-[13px] text-ink-faint sm:flex-row sm:px-10 lg:px-16">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.nameEn}
        </span>
        <div className="flex items-center gap-6">
          {site.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          <a href={site.resume} className="transition-colors hover:text-accent">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
