/* 首页内容 —— 研究方向 / 项目 / 关于。替换为你自己的内容。 */

export interface ResearchArea {
  id: string;
  number: string;
  title: string;
  tags: string;
  summary: string;
}

export const research: ResearchArea[] = [
  {
    id: "stat-modeling",
    number: "01",
    title: "Statistical Modeling",
    tags: "SEM · Latent · Psychometrics",
    summary:
      "Latent variable models, structural equation modeling, and psychometric methods for measurement and theory testing.",
  },
  {
    id: "causal",
    number: "02",
    title: "Causal Inference",
    tags: "Potential Outcomes · IV · Uplift",
    summary:
      "Potential outcomes, instrumental variables, and uplift modeling for estimating treatment effects.",
  },
  {
    id: "ml",
    number: "03",
    title: "Machine Learning",
    tags: "Predictive · Deep Learning",
    summary:
      "Predictive modeling and deep learning on structured and unstructured data.",
  },
  {
    id: "cv",
    number: "04",
    title: "Computer Vision",
    tags: "Detection · Tracking",
    summary:
      "Image processing, object detection, and tracking for visual analytics.",
  },
  {
    id: "stat-comp",
    number: "05",
    title: "Statistical Computing",
    tags: "R · Python",
    summary:
      "Statistical software, reproducible pipelines, and tools that turn methods into usable products.",
  },
];

export interface Project {
  id: string;
  number: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: "energy",
    number: "01",
    title: "Industrial Energy Optimization",
    tags: ["TSMixer", "Time Series", "Optimization"],
    year: "2025 — 2026",
    description:
      "Predictive modeling and control-oriented optimization for industrial chilled-water systems.",
    href: "#",
  },
  {
    id: "structural",
    number: "02",
    title: "Structural Monitoring",
    tags: ["Anomaly Detection", "Time Series"],
    year: "2024 — 2025",
    description:
      "Time-series anomaly detection for structural health monitoring and early warning.",
    href: "#",
  },
  {
    id: "stat-software",
    number: "03",
    title: "Statistical Software",
    tags: ["R", "Workflow", "Plugin"],
    year: "2024 —",
    description:
      "A node-based statistical workflow tool — turning R methods into usable, repeatable pipelines.",
    href: "#",
  },
  {
    id: "cv-project",
    number: "04",
    title: "Computer Vision",
    tags: ["YOLO", "DeepSORT", "Video Analytics"],
    year: "2023 — 2024",
    description:
      "Object detection and multi-object tracking for video analytics pipelines.",
    href: "#",
  },
];

export interface Note {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
}

/** 首页 NOTES 区块 —— 指向文档。与 content/docs 的 frontmatter 对应。 */
export const featuredNotes: Note[] = [
  {
    id: "statistics",
    title: "Statistics",
    category: "Notes",
    description: "Estimation, inference, and the models behind the models.",
    href: "/docs/design-system",
  },
  {
    id: "causal-notes",
    title: "Causal Inference",
    category: "Notes",
    description: "Potential outcomes, DAGs, and identification.",
    href: "/docs/adding-docs",
  },
  {
    id: "ml-notes",
    title: "Machine Learning",
    category: "Notes",
    description: "Prediction, generalization, and the practical bits.",
    href: "/docs/getting-started",
  },
  {
    id: "cv-notes",
    title: "Computer Vision",
    category: "Notes",
    description: "Detection, tracking, and visual understanding.",
    href: "/docs/about",
  },
];
