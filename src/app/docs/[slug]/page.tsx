import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import Container from "@/components/Container";

export function generateStaticParams() {
  return getAllDocs().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { meta } = getDocBySlug(slug);
    return { title: meta.title };
  } catch {
    return { title: "Notes" };
  }
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let meta, content;
  try {
    const doc = getDocBySlug(slug);
    meta = doc.meta;
    content = doc.content;
  } catch {
    notFound();
  }

  return (
    <Container className="py-16 lg:py-20">
      <Link
        href="/docs"
        className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All notes
      </Link>

      <header className="mb-12 mt-8 border-b border-line pb-8">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {meta.title}
        </h1>
        {meta.description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {meta.description}
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-ink-faint">
          {meta.date ? <span>{meta.date}</span> : null}
          {meta.tags?.length ? <span>{meta.tags.join(" · ")}</span> : null}
        </div>
      </header>

      <article className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-code:font-normal">
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>
    </Container>
  );
}
