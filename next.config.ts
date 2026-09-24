import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出 —— 兼容 GitHub Pages（无需 Node 运行时）
  output: "export",
  // 若使用 <Image>，静态导出需关闭图片优化
  images: { unoptimized: true },
  // 部署到项目页（username.github.io/<repo>/）时，取消注释并填仓库名：
  // basePath: "/pinfolio",
};

export default nextConfig;
