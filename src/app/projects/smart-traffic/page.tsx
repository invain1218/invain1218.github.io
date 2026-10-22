import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Smart Traffic Video Analytics",
  description:
    "基于 YOLO 的智慧交通视频分析项目，展示 ROI 场景配置、车辆检测跟踪与 Web 监控台。",
  keywords: ["smart traffic", "YOLO", "vehicle detection", "object tracking"],
};

export default function SmartTrafficProjectPage() {
  return (
    <Container className="py-16 lg:py-20">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-soft transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Selected Work
      </Link>

      <header className="mb-12 mt-8 border-b border-line pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          YOLO · DeepSORT · Video Analytics
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Smart Traffic Video Analytics
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
          项目围绕道路视频中的车辆检测、跨帧跟踪和交通场景监控展开，包含 ROI
          区域配置流程与多路视频 Web 监控台。
        </p>
      </header>

      <div className="space-y-14">
        <section aria-labelledby="roi-heading">
          <div className="mb-5">
            <h2 id="roi-heading" className="text-2xl font-semibold tracking-tight">
              ROI Scene Configuration
            </h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
              在道路视频上配置感兴趣区域，为车道、检测区域和后续交通规则判断设定空间范围。
            </p>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/trafficyolo/roi-poster.jpg"
            className="aspect-video w-full rounded-md border border-line bg-black"
            aria-label="智慧交通 ROI 场景配置演示"
          >
            <source src="/videos/trafficyolo/roi-demo.mp4" type="video/mp4" />
            当前浏览器不支持 HTML 视频播放。
          </video>
        </section>

        <section aria-labelledby="monitor-heading">
          <div className="mb-5">
            <h2 id="monitor-heading" className="text-2xl font-semibold tracking-tight">
              Web Traffic Monitoring Dashboard
            </h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
              监控台汇总多路视频状态与车辆统计，并在画面中展示检测框、跟踪 ID、车道和区域信息。
            </p>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/trafficyolo/web-poster.jpg"
            className="aspect-video w-full rounded-md border border-line bg-black"
            aria-label="智慧交通 Web 监控台演示"
          >
            <source src="/videos/trafficyolo/web-demo.mp4" type="video/mp4" />
            当前浏览器不支持 HTML 视频播放。
          </video>
          <p className="mt-3 text-sm leading-relaxed text-ink-faint">
            视频为功能演示录屏，界面中的统计数据用于展示监控流程。
          </p>
        </section>
      </div>
    </Container>
  );
}
