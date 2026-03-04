"use client";

import Card from "@/app/components/Card";
import Animate from "@/app/components/Animate";
import { cases } from "@/lib/cases";

const skills = [
  { label: "需求洞察", icon: "🔍", color: "from-purple-500 to-indigo-500" },
  { label: "AI 能力产品化", icon: "🤖", color: "from-pink-500 to-rose-500" },
  { label: "数据闭环与增长", icon: "📈", color: "from-blue-500 to-cyan-500" },
];

export default function Home() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero with floating orbs */}
      <section className="relative pb-20 pt-20 sm:pt-28 overflow-hidden">
        {/* Floating orbs */}
        <div className="orb orb-1 -top-10 -left-20 h-60 w-60 bg-purple-400" />
        <div className="orb orb-2 top-20 right-0 h-40 w-40 bg-pink-400" />
        <div className="orb orb-3 bottom-10 left-1/3 h-48 w-48 bg-blue-400" />

        <div className="relative">
          <Animate animation="fade-up">
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 avatar-glow" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/avatar.png`}
                  alt="朱彦和"
                  width={120}
                  height={120}
                  className="relative rounded-full border-2 border-white shadow-xl"
                />
              </div>

              <div>
                <div className="hero-gradient inline-block rounded-2xl px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/25 mb-4">
                  AI Product Manager
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Yanhe Zhu
                  </span>
                  <br />
                  <span className="text-gray-900">朱彦和</span>
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  AI 产品经理 · Duke ECE · 产品 × 技术双视角
                </p>
              </div>
            </div>
          </Animate>

          {/* Skill pills */}
          <div className="mt-8 flex flex-wrap gap-4">
            {skills.map((s, i) => (
              <Animate key={s.label} animation="scale-in" delay={200 + i * 100}>
                <div className="glass flex items-center gap-2.5 rounded-2xl px-5 py-3 shadow-sm transition-all hover:shadow-md hover:scale-105">
                  <span className="text-xl">{s.icon}</span>
                  <span className={`bg-gradient-to-r ${s.color} bg-clip-text text-sm font-semibold text-transparent`}>
                    {s.label}
                  </span>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 精选案例 */}
      <section className="pb-16">
        <Animate animation="fade-up">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">精选案例</span>
          </h2>
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

      {/* 经历概览 */}
      <section className="pb-24">
        <Animate animation="fade-up">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">经历概览</span>
          </h2>
        </Animate>
        <div className="mt-8 space-y-4">
          {[
            {
              icon: "🎓",
              color: "from-purple-500 to-indigo-500",
              text: (
                <>
                  <strong className="text-gray-900">杜克大学</strong> — 机器学习与大数据硕士（GPA 4.0/4.0），主修 ML、深度学习、科技产品管理
                </>
              ),
            },
            {
              icon: "🎓",
              color: "from-indigo-500 to-blue-500",
              text: (
                <>
                  <strong className="text-gray-900">重庆大学</strong> — 影视摄影与制作 + 计算机科学与技术双学位（GPA 3.8，专排第 1）
                </>
              ),
            },
            {
              icon: "📱",
              color: "from-pink-500 to-rose-500",
              text: (
                <>
                  <strong className="text-gray-900">深圳传音控股</strong> — 影像开发部实习，参与构建显示图像质量评估体系，将测试结论转化为产品建议
                </>
              ),
            },
            {
              icon: "🚦",
              color: "from-teal-500 to-emerald-500",
              text: (
                <>
                  <strong className="text-gray-900">江苏交通控股</strong> — 产品设计实习，完成需求分析、交互设计与跨部门评审推动
                </>
              ),
            },
            {
              icon: "🔬",
              color: "from-blue-500 to-cyan-500",
              text: (
                <>
                  <strong className="text-gray-900">杜克 IoT 实验室 & 清华 AIR 实验室</strong> — AR 记忆智能体、自动驾驶 3D 场景重建研究
                </>
              ),
            },
          ].map((item, i) => (
            <Animate key={i} animation="slide-right" delay={i * 100}>
              <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-all hover:shadow-md">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-lg shadow-sm`}>
                  {item.icon}
                </div>
                <p className="text-gray-600 leading-relaxed pt-1.5">{item.text}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>
    </div>
  );
}
