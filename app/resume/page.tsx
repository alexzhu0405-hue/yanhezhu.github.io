import Link from "next/link";

export const metadata = {
  title: "简历 — 朱彦和",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">简历</span>
      </h1>
      <p className="mt-4 text-gray-500 leading-relaxed">
        你可以在线浏览我的简历概要，或直接下载 PDF 版本。
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
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

      <div className="mt-12 space-y-6">
        <div className="glass rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-base shadow-sm">
              🎓
            </div>
            <h2 className="text-lg font-bold text-gray-900">教育背景</h2>
          </div>
          <div className="ml-12 text-gray-600">
            <p className="font-semibold text-gray-900">Duke University</p>
            <p className="text-sm">电气与计算机工程硕士（ECE M.Eng.）· AI/ML 方向</p>
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-base shadow-sm">
              ⚡
            </div>
            <h2 className="text-lg font-bold text-gray-900">核心能力</h2>
          </div>
          <ul className="ml-12 space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" />产品需求分析与 PRD 撰写（JTBD、用户故事地图）</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-pink-400" />AI/ML 能力评估与产品化落地</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />数据驱动的增长实验与 A/B 测试设计</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />图像信号处理与显示质量评测</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />Python、SQL、基础前端（React/Next.js）</li>
          </ul>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-base shadow-sm">
              📂
            </div>
            <h2 className="text-lg font-bold text-gray-900">相关经历</h2>
          </div>
          <p className="ml-12 text-sm text-gray-500">
            详细经历请参见 PDF 简历，或访问{" "}
            <Link href="/cases" className="text-purple-500 hover:text-purple-700 font-medium transition-colors">
              案例
            </Link>{" "}
            页面了解项目详情。
          </p>
        </div>
      </div>
    </div>
  );
}
