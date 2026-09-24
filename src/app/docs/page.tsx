import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllDocs, type DocMeta } from "@/lib/docs";
import Container from "@/components/Container";

export const metadata = { title: "Notes" };

export default function DocsPage() {
  const docs = getAllDocs();

  // 按 category 分组（没有 category 的归到「未分类」）
  const grouped = new Map<string, DocMeta[]>();
  for (const d of docs) {
    const cat = d.category || "未分类";
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(d);
  }
  const categories = [...grouped.entries()];

  return (
    <Container className="py-16 lg:py-20">
      <header className="mb-12 border-b border-line pb-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Notes / Docs
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Notes
        </h1>
        <p className="mt-4 max-w-xl text-base text-ink-soft">
          Technical notes and documentation, organized by topic.
        </p>
      </header>

      {categories.map(([cat, items]) => (
        <section key={cat} className="mb-12">
          <h2 className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            {cat}
          </h2>
          <div className="border-b border-line">
            {items.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="group flex items-center justify-between gap-6 border-t border-line py-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-base font-medium transition-colors group-hover:text-accent sm:text-lg">
                      {doc.title}
                    </h3>
                    {doc.date ? (
                      <span className="font-mono text-xs text-ink-faint">
                        {doc.date}
                      </span>
                    ) : null}
                  </div>
                  {doc.description ? (
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {doc.description}
                    </p>
                  ) : null}
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
}
