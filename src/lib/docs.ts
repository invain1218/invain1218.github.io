import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content", "docs");

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  category?: string;
}

function asString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return "";
}

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string") return [value];
  return [];
}

/** 列出所有文档（按日期倒序） */
export function getAllDocs(): DocMeta[] {
  if (!fs.existsSync(docsDirectory)) return [];
  const filenames = fs
    .readdirSync(docsDirectory)
    .filter((f) => /\.mdx?$/.test(f));

  const docs = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const file = fs.readFileSync(path.join(docsDirectory, filename), "utf8");
    const { data } = matter(file);
    return {
      slug,
      title: (data.title as string) ?? slug,
      description: asString(data.description),
      date: asString(data.date),
      tags: asStringArray(data.tags),
      category: asString(data.category),
    };
  });

  return docs.sort((a, b) =>
    a.date && b.date ? (a.date < b.date ? 1 : -1) : 0
  );
}

/** 读取单个文档（frontmatter + 正文） */
export function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  return {
    meta: {
      title: (data.title as string) ?? slug,
      description: asString(data.description),
      date: asString(data.date),
      tags: asStringArray(data.tags),
      category: asString(data.category),
    } as Omit<DocMeta, "slug">,
    content,
  };
}
