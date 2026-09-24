import type { ReactNode } from "react";

/** 页面统一容器：最大宽度 1200px，左右留白 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
