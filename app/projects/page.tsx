import Card from "@/app/components/Card";

export const metadata = {
  title: "项目 — 朱彦和",
};

const projects = [
  {
    title: "AlignRAG 研究原型",
    summary:
      "基于 LangChain + FAISS 构建的学术论文 Agentic RAG 系统原型，支持子问题拆解、观点图谱可视化与引用溯源。",
    tags: ["Python", "LangChain", "RAG"],
    href: "https://github.com/yourprofile/alignrag",
  },
  {
    title: "显示质量自动评测工具",
    summary:
      "图像信号处理 pipeline：自动化 Gamma、色准、亮度均匀性等指标检测，输出标准化测试报告。",
    tags: ["Python", "OpenCV", "ISP"],
    href: "https://github.com/yourprofile/display-quality",
  },
  {
    title: "个人作品集网站",
    summary:
      "你正在浏览的这个网站——使用 Next.js App Router + Tailwind CSS 构建，部署于 GitHub Pages。",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/yourprofile/portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">项目</span>
      </h1>
      <p className="mt-3 text-gray-500">
        技术与研究类项目，侧重工程实现与探索。
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            href={p.href}
            title={p.title}
            summary={p.summary}
            tags={p.tags}
          />
        ))}
      </div>
    </div>
  );
}
