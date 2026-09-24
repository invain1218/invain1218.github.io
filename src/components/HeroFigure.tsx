/** 克制的 data / distribution 图形 —— 用于 Hero 右侧，几乎单色 + 一个 accent 点 */
export default function HeroFigure() {
  return (
    <svg
      viewBox="0 0 320 260"
      className="h-full w-full"
      aria-hidden="true"
      role="presentation"
    >
      {/* 坐标轴 */}
      <line x1="16" y1="224" x2="304" y2="224" stroke="#e7e6e2" strokeWidth="1" />
      <line x1="16" y1="20" x2="16" y2="224" stroke="#e7e6e2" strokeWidth="1" />

      {/* 分布曲线 */}
      <path
        d="M40 224 C 70 224, 88 74, 160 74 C 232 74, 250 224, 280 224"
        fill="none"
        stroke="#141414"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />

      {/* 均值线（accent） */}
      <line x1="160" y1="86" x2="160" y2="224" stroke="#2452e3" strokeWidth="1" />

      {/* 散点 */}
      <circle cx="86" cy="160" r="2.5" fill="#141414" fillOpacity="0.18" />
      <circle cx="118" cy="128" r="2.5" fill="#141414" fillOpacity="0.18" />
      <circle cx="138" cy="176" r="2.5" fill="#141414" fillOpacity="0.18" />
      <circle cx="204" cy="140" r="2.5" fill="#141414" fillOpacity="0.18" />
      <circle cx="234" cy="164" r="2.5" fill="#141414" fillOpacity="0.18" />
      <circle cx="252" cy="120" r="2.5" fill="#141414" fillOpacity="0.18" />

      {/* accent 点 */}
      <circle cx="160" cy="110" r="3.5" fill="#2452e3" />

      {/* 均值标记 */}
      <line x1="160" y1="20" x2="160" y2="34" stroke="#141414" strokeWidth="1" />
      <circle cx="160" cy="20" r="2" fill="none" stroke="#141414" strokeWidth="1" />
    </svg>
  );
}
