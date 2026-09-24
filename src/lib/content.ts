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
    id: "psycho",
    number: "01",
    title: "Psychometrics",
    tags: "CTT · IRT · CDM",
    summary:
      "Classical Test Theory, Item Response Theory, and Cognitive Diagnostic Models for test construction, reliability and validity analysis, parameter estimation, and latent trait modeling.",
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

export interface NoteCategory {
  id: string;
  title: string;
  description: string;
}

/** 首页 NOTES 区块 —— 笔记分类。分类名对应 md 文件 frontmatter 里的 category 字段。 */
export const noteCategories: NoteCategory[] = [
  {
    id: "statistics",
    title: "Statistics",
    description: "Estimation, inference, and the models behind the models.",
  },
  {
    id: "causal-inference",
    title: "Causal Inference",
    description: "Potential outcomes, DAGs, and identification.",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Prediction, generalization, and the practical bits.",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Detection, tracking, and visual understanding.",
  },
  {
    id: "tsa-notes",
    title: "Time Series Analysis",
    description: "Analysis and modeling of time-dependent data.",
  },
];

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  href: string;
}

/* 发表的文章*/
export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Assessing concept mapping competence using item expansion‐based diagnostic classification analysis",
    authors: "Shulan Xia, Peida Zhan, Kennedy Kam Ho Chan, Lijun Wang",
    venue: "Journal of Research in Science Teaching",
    year: "2023",
    href: "https://doi.org/10.1002/tea.21897",
  },
];
