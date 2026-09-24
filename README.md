# Lin · 林晓 — Personal Research Lab

个人研究主页。定位：**Personal Research Lab × Data × Statistics × AI × Engineering**。

视觉方向：**Editorial / Technical / Minimal** —— 暖白纸底、近黑字、单一电光蓝 accent、等宽字体做编号与标签、大量留白、编号列表。**Next.js + TypeScript + Tailwind CSS**，文档用 **Markdown/MDX** 管理，桌面 / 平板 / 移动端全响应式。

## 技术栈

| 层 | 实现 |
| --- | --- |
| 框架 | Next.js 16（App Router）+ React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4（`@theme` 设计 token） |
| 图标 | lucide-react |
| 文档 | MDX（`next-mdx-remote` + `gray-matter` + `remark-gfm`） |
| 动效 | 纯 CSS transition + IntersectionObserver（无额外依赖） |

## 快速开始

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # 生成静态产物
npm run start      # 预览生产版本
```

部署到 Vercel 直接导入仓库即可。

## 信息架构

```
NAVIGATION → HERO → RESEARCH → SELECTED WORK → NOTES → ABOUT → FOOTER
```

首页结构（`src/app/page.tsx`）：Hero（大字号姓名 + 一句简介 + 克制的分布图形）→ Research（编号列表 01–05）→ Selected Work（编号项目 01–04）→ Notes（文档列表）→ About（简介 + 社交）→ Footer。

## 项目结构

```
src/
├── app/
│   ├── page.tsx            # 首页
│   ├── layout.tsx          # 全局布局
│   ├── globals.css         # ★ 设计 token
│   └── docs/               # 文档区（MDX）
├── components/             # 可复用组件
│   ├── Nav / Hero / HeroFigure
│   ├── Research / Projects / Notes / About
│   ├── SectionHeader / Container / Reveal / Footer
└── lib/
    ├── site.ts             # ★ 站点身份
    ├── content.ts          # ★ 研究方向 / 项目
    └── docs.ts             # 文档读取
content/
└── docs/*.mdx              # ★ Markdown 文档
```

## 加内容（只改带 ★ 的文件）

- **身份**：`src/lib/site.ts`（名字 / 简介 / 社交 / resume 链接）。
- **研究方向与项目**：`src/lib/content.ts`。
- **文档**：`content/docs/` 新增 `.mdx`，自动出现在 `/docs` 和首页 Notes。

## 设计 token（`src/app/globals.css`）

| 类别 | Token | 值 |
| --- | --- | --- |
| Accent | `accent` | `#2452e3`（电光蓝，只用于链接/悬停/标签/编号） |
| 文字 | `ink` / `ink-soft` / `ink-faint` | `#141414` / `#575757` / `#8f8f8f` |
| 背景 | `paper` / `surface` | `#fafaf8` / `#ffffff` |
| 描边 | `line` | `#e7e6e2` |

- **字体层级**：Display 72–92px → H1 48–64 → H2 32–40 → H3 20–24 → Body 16–18 → Caption 12–14（mono）。
- **圆角**：锐角为主，仅图片/代码块 `rounded`(4px)。
- **间距**：Tailwind 4px 基准，区块间 `py-24`~`py-28`，内容最大宽 `1200px`。

## 响应式

| 档位 | 宽度 |
| --- | --- |
| Mobile | < 640px（导航收起为 Menu） |
| Tablet | 640–1024px |
| Desktop | ≥ 1024px |

桌面基准 1440×900，平板 768×1024，手机 390×844。

## 授权

示例内容均为占位，替换成你自己的即可。
