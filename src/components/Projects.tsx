import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <div className="border-b border-line">
      {projects.map((p) => (
        <article key={p.id} className="group border-t border-line py-10">
          <div className="grid gap-3 lg:grid-cols-[64px_1fr_auto] lg:gap-6">
            <span className="font-mono text-sm text-ink-faint">{p.number}</span>

            <div>
              <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                {p.tags.join(" · ")}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                {p.description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 lg:flex-col lg:items-end lg:justify-between">
              <span className="font-mono text-xs text-ink-faint">{p.year}</span>
              <Link
                href={p.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
              >
                View Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
