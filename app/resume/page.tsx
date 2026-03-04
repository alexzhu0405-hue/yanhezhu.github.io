import Link from "next/link";

export const metadata = {
  title: "简历 — 朱彦和",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        简历
      </h1>
      <p className="mt-4 text-neutral-600 leading-relaxed">
        你可以在线浏览我的简历概要，或直接下载 PDF 版本。
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
          />
        </svg>
        下载简历 (PDF)
      </a>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">教育背景</h2>
          <div className="mt-3 space-y-3 text-neutral-700">
            <div>
              <p className="font-medium text-neutral-900">Duke University</p>
              <p className="text-sm">电气与计算机工程硕士（ECE M.Eng.）· AI/ML 方向</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-neutral-900">核心能力</h2>
          <ul className="mt-3 space-y-1.5 text-neutral-700 text-sm">
            <li>· 产品需求分析与 PRD 撰写（JTBD、用户故事地图）</li>
            <li>· AI/ML 能力评估与产品化落地</li>
            <li>· 数据驱动的增长实验与 A/B 测试设计</li>
            <li>· 图像信号处理与显示质量评测</li>
            <li>· Python、SQL、基础前端（React/Next.js）</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-neutral-900">相关经历</h2>
          <p className="mt-3 text-sm text-neutral-500">
            详细经历请参见 PDF 简历，或访问{" "}
            <Link href="/cases" className="underline hover:text-neutral-900">
              案例
            </Link>{" "}
            页面了解项目详情。
          </p>
        </div>
      </section>
    </div>
  );
}
