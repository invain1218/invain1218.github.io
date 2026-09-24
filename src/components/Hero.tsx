import Container from "./Container";
import HeroFigure from "./HeroFigure";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative border-b border-line">
      <Container className="grid items-center gap-14 py-24 lg:grid-cols-[1.5fr_1fr] lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            {site.nameEn} · {site.name}
          </p>

          <h1 className="mt-6 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[92px]">
            {site.name}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-ink-soft">
            {site.tagline}
          </p>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-ink-faint">
            <span>{site.location}</span>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="hidden h-[280px] lg:block">
          <HeroFigure />
        </div>
      </Container>

      <p className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint lg:block">
        Scroll
      </p>
    </section>
  );
}
