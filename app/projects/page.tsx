import Card from "@/app/components/Card";

export const metadata = {
  title: "项目 — 朱彦和",
};

const projects = [
  {
    title: "AR 记忆智能体",
    summary: "杜克大学 IoT 实验室：分层语义压缩 + 两阶段检索架构，实现 AR 眼镜端高效长时记忆问答。",
    tags: ["Python", "LLM", "Edge Computing"],
    href: "/cases/ar-memory",
  },
  {
    title: "自动驾驶 3D 场景重建",
    summary: "清华 AIR 实验室：引入双边网格与相机特定训练策略优化 OmniRe，Chamfer Distance 误差降低约 35%。",
    tags: ["Python", "3D Reconstruction", "LiDAR"],
    href: "https://github.com/yourprofile",
  },
  {
    title: "3D 人体姿态行为分析系统",
    summary: "基于三维人体姿态估计 + 大模型接口，将时序姿态信号转化为可解释的运动行为语义，辅助运动复盘分析。",
    tags: ["Python", "Node.js", "LLM"],
    href: "https://github.com/yourprofile",
  },
  {
    title: "个人作品集网站",
    summary: "你正在浏览的这个网站——Next.js App Router + Tailwind CSS，部署于 GitHub Pages。",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/alexzhu0405-hue/yanhezhu.github.io",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="hero-gradient-text">项目</span>
      </h1>
      <p className="mt-3 text-slate-500">技术与研究类项目，涵盖 AI、3D 视觉与产品工程。</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} href={p.href} title={p.title} summary={p.summary} tags={p.tags} />
        ))}
      </div>
    </div>
  );
}
