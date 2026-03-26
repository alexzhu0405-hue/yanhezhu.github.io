"use client";

import Card from "@/app/components/Card";
import Animate from "@/app/components/Animate";
import { cases } from "@/lib/cases";

const skills = [
  { label: "需求洞察", icon: "🔍" },
  { label: "AI 能力产品化", icon: "🤖" },
  { label: "数据闭环与增长", icon: "📈" },
];

const stats = [
  { value: "4.0", label: "Duke GPA" },
  { value: "Top 1", label: "重大专排" },
  { value: "3+", label: "产品/研究项目" },
  { value: "2", label: "实验室经历" },
];

const timeline = [
  { period: "2026.1 - 至今", title: "杜克大学 IoT 实验室", desc: "AR 记忆智能体：分层语义压缩与两阶段检索架构", color: "bg-blue-500" },
  { period: "2025.2 - 2025.6", title: "深圳传音控股 · 影像开发部", desc: "显示图像质量评估体系 · 高 FPS 测试标准设计", color: "bg-teal-500" },
  { period: "2024.9 - 2025.2", title: "清华大学 AIR 实验室", desc: "自动驾驶 3D 场景重建 · Chamfer Distance 误差降低 35%", color: "bg-pink-500" },
  { period: "2023.7 - 2023.8", title: "江苏交通控股 · 产品设计", desc: "企业级交通监控系统需求分析与交互设计", color: "bg-amber-500" },
];

const techStack = [
  { name: "需求分析", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  { name: "PRD 撰写", color: "bg-teal-500/15 text-teal-400 border-teal-500/20" },
  { name: "竞品分析", color: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20" },
  { name: "Figma", color: "bg-pink-500/15 text-pink-400 border-pink-500/20" },
  { name: "A/B Test", color: "bg-green-500/15 text-green-400 border-green-500/20" },
  { name: "Vibe Coding", color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20" },
  { name: "Python", color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
  { name: "SQL", color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  { name: "C++", color: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
  { name: "HTML/CSS", color: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
  { name: "SVG", color: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
  { name: "Blender", color: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
];

export default function Home() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="relative pb-16 pt-20 sm:pt-28">
        <div className="orb orb-1 top-4 left-[5%] h-32 w-32 bg-blue-500" />
        <div className="orb orb-2 top-24 right-[10%] h-28 w-28 bg-purple-500" />
        <div className="orb orb-3 bottom-16 left-[40%] h-36 w-36 bg-blue-400" />

        <div className="relative">
          <Animate animation="fade-up">
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <div className="relative shrink-0">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-400 avatar-glow" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/avatar.png`}
                  alt="朱彦和"
                  width={130}
                  height={130}
                  className="relative rounded-full border-2 border-slate-800 shadow-2xl"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-blue-400 mb-3">👋 你好，我是</p>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  <span className="hero-gradient-text">朱彦和</span>
                </h1>
                <p className="mt-1 text-2xl font-light text-slate-400">Yanhe Zhu</p>
                <p className="mt-3 text-sm text-slate-500">
                  杜克大学 机器学习与大数据硕士 · 重庆大学 计算机科学 + 影视摄影 双学位
                </p>
              </div>
            </div>
          </Animate>

          {/* Stats */}
          <Animate animation="fade-up" delay={150}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                  <p className="text-2xl font-bold text-blue-400">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Animate>

          {/* Skill pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <Animate key={s.label} animation="scale-in" delay={300 + i * 80}>
                <div className="glass flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-sm font-medium text-slate-300">{s.label}</span>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 精选案例 */}
      <section className="pb-16">
        <Animate animation="fade-up">
          <h2 className="text-2xl font-bold">
            <span className="hero-gradient-text">精选案例</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">产品思维驱动的项目实践</p>
        </Animate>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Animate key={c.slug} animation="fade-up" delay={i * 120}>
              <Card
                href={`/cases/${c.slug}`}
                title={c.title}
                summary={c.summary}
                tags={c.highlights}
              />
            </Animate>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16">
        <Animate animation="fade-up">
          <h2 className="text-2xl font-bold">
            <span className="hero-gradient-text">时间线</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">实习与研究经历</p>
        </Animate>
        <div className="relative mt-8 pl-10">
          <div className="timeline-line" />
          {timeline.map((item, i) => (
            <Animate key={i} animation="slide-right" delay={i * 80}>
              <div className="relative mb-8 last:mb-0">
                <div className="absolute -left-10 top-1.5">
                  <div className={`timeline-dot ${item.color}`} />
                </div>
                <div className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                  <p className="text-xs font-medium text-blue-400">{item.period}</p>
                  <p className="mt-1 font-semibold text-slate-200">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pb-24">
        <Animate animation="fade-up">
          <h2 className="text-2xl font-bold">
            <span className="hero-gradient-text">技术栈</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">工具与能力</p>
        </Animate>
        <Animate animation="fade-up" delay={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.name}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${t.color}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </Animate>
      </section>
    </div>
  );
}
