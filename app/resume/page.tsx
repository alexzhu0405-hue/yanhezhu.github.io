import Link from "next/link";

export const metadata = {
  title: "简历 — 朱彦和",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="hero-gradient-text">简历</span>
      </h1>
      <p className="mt-4 text-slate-500 leading-relaxed">
        你可以在线浏览我的简历概要，或直接下载 PDF 版本。
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
        </svg>
        下载简历 (PDF)
      </a>

      <div className="mt-12 space-y-6">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-base">🎓</div>
            <h2 className="text-lg font-bold text-slate-100">教育背景</h2>
          </div>
          <div className="ml-12 space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">杜克大学 (Duke University)</p>
                <span className="text-xs text-slate-500 shrink-0">2025.8 - 2027.5</span>
              </div>
              <p className="text-sm text-slate-400">硕士 · 机器学习与大数据 · GPA 4.0/4.0</p>
              <p className="text-xs text-slate-500 mt-1">主修：Python、机器学习、深度学习、数据工程、科技产品管理</p>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">重庆大学</p>
                <span className="text-xs text-slate-500 shrink-0">2021.9 - 2025.6</span>
              </div>
              <p className="text-sm text-slate-400">本科 · 影视摄影与制作 + 计算机科学与技术（双学位）· GPA 3.8/4.0（专排第 1）</p>
              <p className="text-xs text-slate-500 mt-1">主修：C++、数据结构与算法、计算机组成原理、数据库、数字三维空间设计</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20 text-base">💼</div>
            <h2 className="text-lg font-bold text-slate-100">实习经历</h2>
          </div>
          <div className="ml-12 space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">深圳传音控股 · 影像开发部</p>
                <span className="text-xs text-slate-500 shrink-0">2025.2 - 2025.6</span>
              </div>
              <p className="text-sm text-slate-400">参与构建显示图像质量评估体系，将光学测试结论转化为产品建议；设计高 FPS 场景测试标准并统一跨部门评价口径</p>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">江苏交通控股 · 产品设计</p>
                <span className="text-xs text-slate-500 shrink-0">2023.7 - 2023.8</span>
              </div>
              <p className="text-sm text-slate-400">完成企业级交通监控系统的需求分析与交互设计，推动跨部门评审落地，输出结构化交付文档支撑研发</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-base">🔬</div>
            <h2 className="text-lg font-bold text-slate-100">研究经历</h2>
          </div>
          <div className="ml-12 space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">AR 记忆智能体 · 杜克大学智能交互 IoT 实验室</p>
                <span className="text-xs text-slate-500 shrink-0">2026.1 - 至今</span>
              </div>
              <p className="text-sm text-slate-400">设计分层语义压缩与两阶段检索架构，实现 AR 眼镜端高效长时记忆问答</p>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">自动驾驶 3D 场景重建 · 清华大学 AIR 实验室</p>
                <span className="text-xs text-slate-500 shrink-0">2024.9 - 2025.2</span>
              </div>
              <p className="text-sm text-slate-400">引入双边网格与相机特定训练策略，Chamfer Distance 误差最高降低约 35%</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-base">⚡</div>
            <h2 className="text-lg font-bold text-slate-100">核心能力</h2>
          </div>
          <div className="ml-12 grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />需求分析与 PRD 撰写</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" />竞品分析与商业模式设计</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />GTM 策划与增长实验</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-pink-400" />Python / SQL / C++</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" />Figma / Photoshop / Blender</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />HTML/CSS / React / Next.js</div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 pt-2">
          更多详情请访问{" "}
          <Link href="/cases" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">案例</Link>{" "}
          页面，或直接下载 PDF 简历。
        </p>
      </div>
    </div>
  );
}
