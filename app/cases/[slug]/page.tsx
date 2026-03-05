import { cases, getCaseBySlug } from "@/lib/cases";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return { title: "案例未找到" };
  return { title: `${c.title} — 朱彦和` };
}

const sectionColors = [
  "bg-red-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-blue-500",
  "bg-amber-500",
  "bg-teal-500",
  "bg-violet-500",
];

function Section({ title, children, index }: { title: string; children: React.ReactNode; index: number }) {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-3">
        <div className={`h-5 w-1 rounded-full ${sectionColors[index % sectionColors.length]}`} />
        <h2 className="text-lg font-bold text-slate-100">{title}</h2>
      </div>
      <div className="mt-3 ml-4 text-slate-400 leading-relaxed">{children}</div>
    </section>
  );
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <Link
        href="/cases"
        className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-1.5 text-sm text-slate-400 transition-all hover:text-blue-400"
      >
        &larr; 返回案例列表
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">
        <span className="hero-gradient-text">{c.title}</span>
      </h1>
      <p className="mt-4 text-lg text-slate-400">{c.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {c.highlights.map((h, i) => {
          const colors = ["bg-blue-500/15 text-blue-400", "bg-purple-500/15 text-purple-400", "bg-teal-500/15 text-teal-400"];
          return (
            <span key={h} className={`rounded-full px-3 py-1 text-xs font-medium ${colors[i % colors.length]}`}>
              {h}
            </span>
          );
        })}
      </div>

      <div className="mt-8 glass rounded-2xl p-8">
        <Section title="背景与问题" index={0}><p>{c.background}</p></Section>
        <Section title="目标与指标" index={1}><p>{c.goals}</p></Section>
        <Section title="用户与场景" index={2}><p>{c.users}</p></Section>
        <Section title="方案设计" index={3}>
          <ol className="list-inside list-decimal space-y-2">
            {c.solution.map((step, i) => (<li key={i}>{step.replace(/^\d+\.\s*/, "")}</li>))}
          </ol>
        </Section>
        <Section title="关键决策与取舍" index={4}><p>{c.decisions}</p></Section>
        <Section title="验证方式与结果" index={5}><p>{c.validation}</p></Section>
        <Section title="复盘与下一步" index={6}><p>{c.retrospective}</p></Section>
      </div>
    </article>
  );
}
