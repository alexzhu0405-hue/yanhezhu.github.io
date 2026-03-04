import Card from "@/app/components/Card";
import { cases } from "@/lib/cases";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="pb-16 pt-24 sm:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Yanhe Zhu / 朱彦和
        </h1>
        <p className="mt-4 text-xl text-neutral-600">
          AI 产品经理 / AI 产品实习
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["需求洞察", "AI 能力产品化", "数据闭环与增长"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 精选案例 */}
      <section className="pb-16">
        <h2 className="text-2xl font-semibold text-neutral-900">精选案例</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="pb-20">
        <h2 className="text-2xl font-semibold text-neutral-900">经历概览</h2>
        <ul className="mt-6 space-y-4 text-neutral-600">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neutral-400" />
            <span>
              <strong className="text-neutral-900">Duke University</strong> — 电气与计算机工程硕士（ECE M.Eng.），专注 AI/ML 方向
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neutral-400" />
            <span>
              产品与 AI 项目经验：从需求分析、方案设计到数据驱动迭代，覆盖智能补货、Agentic RAG 等方向
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neutral-400" />
            <span>
              影像/显示质量相关经历：具备图像信号处理与显示技术背景，能将技术能力转化为产品语言
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
