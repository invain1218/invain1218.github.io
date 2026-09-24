import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";
import PrintButton from "@/components/PrintButton";
import { site } from "@/lib/site";

export const metadata = { title: "Résumé" };

export default function ResumePage() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content", "resume.mdx"),
    "utf8"
  );
  const { content } = matter(file);

  return (
    <Container className="py-16 lg:py-20">
      <div className="mb-12 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>
        <PrintButton />
      </div>

      <header className="mb-12 border-b border-line pb-8">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.name}
          <span className="ml-3 text-2xl font-normal text-ink-faint">
            {site.nameEn}
          </span>
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          Résumé
        </p>
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
