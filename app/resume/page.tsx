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
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">重庆大学</p>
                <span className="text-xs text-slate-500 shrink-0">2021.9 - 2025.6</span>
              </div>
              <p className="text-sm text-slate-400">本科 · 影视摄影与制作 + 计算机科学与技术（双学位）· GPA 3.8/4.0 · 专排第 1</p>
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
                <p className="font-semibold text-slate-200">深圳传音控股 · 影像开发部实习生</p>
                <span className="text-xs text-slate-500 shrink-0">2025.2 - 2025.6</span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>参与构建显示图像质量评估体系，基于 CA-410 和 CS-2000 光学测试结果分析亮度衰减与色偏问题，将测试结论转化为产品建议</li>
                <li>将"游戏流畅度""触控顺滑感"等主观体验拆解为帧间稳定性、显示延迟与 TP 抖动等可量化指标，设计高 FPS 场景测试标准</li>
                <li>参与多套显示方案分析，在显示指标与功耗控制之间进行权衡评估，输出产品评估与决策文档</li>
              </ul>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">江苏交通控股 · 产品设计实习生</p>
                <span className="text-xs text-slate-500 shrink-0">2023.7 - 2023.8</span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>进行用户需求分析并拆解为可执行的产品功能方案，用 Figma 和 Photoshop 完成产品方案设计</li>
                <li>参与跨部门设计评审，推动需求方案达成一致，输出结构化产品交付文档支持研发落地</li>
              </ul>
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
                <p className="font-semibold text-slate-200">AI 记忆助手 · 杜克大学智能交互物联网实验室</p>
                <span className="text-xs text-slate-500 shrink-0">2026.1 - 至今</span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>设计"Room → Event"分层语义压缩架构，将视频流转化为结构化可检索记忆单元</li>
                <li>设计两阶段检索框架（Scene-level 召回 + Event-level 精排），提升跨场景检索准确率</li>
                <li>构建记忆到 Skill 的抽象机制，支持 Agent 操作指导与主动辅助</li>
                <li>构建分布式 Agent 架构（Glasses-Agent + Mobile-Agent），实现感知、记忆构建与推理解耦</li>
              </ul>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">自动驾驶 3D 场景重建 · 清华大学 AIR 实验室</p>
                <span className="text-xs text-slate-500 shrink-0">2024.9 - 2025.2</span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>复现 OmniRe 并解决模型训练与调试问题，引入颜色校正提升多视角一致性与重建精度</li>
                <li>引入双边网格与相机特定训练策略，在 Waymo 与 NuScenes 上 Chamfer Distance 误差最高降低约 35%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-base">📦</div>
            <h2 className="text-lg font-bold text-slate-100">项目经历</h2>
          </div>
          <div className="ml-12 space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">电商推荐产品 — 高频刚需品复购决策优化</p>
                <span className="text-xs text-slate-500 shrink-0">2026.1 - 至今</span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>拆解用户复购路径，识别"库存焦虑 + 价格波动感知"为核心转化阻力，推动产品方向调整为"降低决策成本"</li>
                <li>基于购买频率、品牌切换率与优惠券使用行为构建用户分层模型，设计差异化提醒策略</li>
                <li>引入复购周期预测与价格趋势因子，设计动态提醒阈值机制</li>
                <li>以"有效复购率"为北极星指标，设计 A/B Test 建立策略优化闭环</li>
              </ul>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-slate-200">基于 3D 人体姿态估计的人体行为分析系统</p>
                <span className="text-xs text-slate-500 shrink-0">2024.12 - 2025.6</span>
              </div>
              <ul className="mt-1 space-y-1 text-sm text-slate-400 list-disc list-inside">
                <li>基于三维人体姿态估计算法建模，引入大模型接口将时序姿态信号转化为可解释的运动行为语义输出</li>
                <li>围绕体育运动分析流程设计核心交互方式，用 HTML/CSS 实现，Node.js 构建前后端通信</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-base">⚡</div>
            <h2 className="text-lg font-bold text-slate-100">个人技能</h2>
          </div>
          <div className="ml-12 space-y-3 text-sm text-slate-400">
            <div>
              <p className="text-xs font-medium text-slate-500 mb-1.5">产品能力</p>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />需求分析</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />PRD 撰写</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />竞品分析</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Figma</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />A/B Test 设计与指标构建</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Vibe Coding</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 mb-1.5">技术能力</p>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />Python</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />SQL</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />C++</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />HTML/CSS</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />SVG</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400" />Blender 建模</span>
              </div>
            </div>
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
