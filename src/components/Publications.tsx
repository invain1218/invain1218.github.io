import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/lib/content";

export default function Publications() {
  return (
    <div className="border-b border-line">
      {publications.map((p) => (
        <Link
          key={p.id}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border-t border-line py-7"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium tracking-tight transition-colors duration-200 group-hover:text-accent sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {p.authors}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                {p.venue} · {p.year}
              </p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </div>
        </Link>
      ))}
    </div>
  );
}
