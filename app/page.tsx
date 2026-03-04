import Card from "@/app/components/Card";
import { cases } from "@/lib/cases";

const skills = [
  { label: "需求洞察", icon: "🔍", color: "from-purple-500 to-indigo-500" },
  { label: "AI 能力产品化", icon: "🤖", color: "from-pink-500 to-rose-500" },
  { label: "数据闭环与增长", icon: "📈", color: "from-blue-500 to-cyan-500" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="pb-20 pt-20 sm:pt-28">
        <div className="hero-gradient inline-block rounded-2xl px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/25 mb-6">
          AI Product Manager
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Yanhe Zhu
          </span>
          <br />
          <span className="text-gray-900">朱彦和</span>
        </h1>
        <p className="mt-5 text-xl text-gray-500">
          AI 产品经理 / AI 产品实习
        </p>

        {/* Skill pills */}
        <div className="mt-8 flex flex-wrap gap-4">
          {skills.map((s) => (
            <div
              key={s.label}
              className="glass flex items-center gap-2.5 rounded-2xl px-5 py-3 shadow-sm transition-all hover:shadow-md hover:scale-105"
            >
              <span className="text-xl">{s.icon}</span>
              <span className={`bg-gradient-to-r ${s.color} bg-clip-text text-sm font-semibold text-transparent`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 精选案例 */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold text-gray-900">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">精选案例</span>
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Card
              key={c.slug}
              href={`/cases/${c.slug}`}
              title={c.title}
              summary={c.summary}
              tags={c.highlights}
            />
          ))}
        </div>
      </section>

      {/* 经历概览 */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold text-gray-900">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">经历概览</span>
        </h2>
        <div className="mt-8 space-y-4">
          {[
            {
              icon: "🎓",
              color: "from-purple-500 to-indigo-500",
              text: (
                <>
                  <strong className="text-gray-900">Duke University</strong> — 电气与计算机工程硕士（ECE M.Eng.），专注 AI/ML 方向
                </>
              ),
            },
            {
              icon: "💡",
              color: "from-pink-500 to-rose-500",
              text: "产品与 AI 项目经验：从需求分析、方案设计到数据驱动迭代，覆盖智能补货、Agentic RAG 等方向",
            },
            {
              icon: "📷",
              color: "from-blue-500 to-cyan-500",
              text: "影像/显示质量相关经历：具备图像信号处理与显示技术背景，能将技术能力转化为产品语言",
            },
          ].map((item, i) => (
            <div key={i} className="glass flex items-start gap-4 rounded-2xl p-5 transition-all hover:shadow-md">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-lg shadow-sm`}>
                {item.icon}
              </div>
              <p className="text-gray-600 leading-relaxed pt-1.5">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
