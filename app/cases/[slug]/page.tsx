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
  "from-red-500 to-orange-500",
  "from-purple-500 to-indigo-500",
  "from-pink-500 to-rose-500",
  "from-blue-500 to-cyan-500",
  "from-amber-500 to-yellow-500",
  "from-teal-500 to-emerald-500",
  "from-violet-500 to-purple-500",
];

function Section({ title, children, index }: { title: string; children: React.ReactNode; index: number }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-3">
        <div className={`h-6 w-1 rounded-full bg-gradient-to-b ${sectionColors[index % sectionColors.length]}`} />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="mt-4 ml-4 text-gray-600 leading-relaxed">{children}</div>
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
        className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-1.5 text-sm text-gray-500 transition-all hover:shadow-md hover:text-purple-600"
      >
        &larr; 返回案例列表
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          {c.title}
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-500">{c.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {c.highlights.map((h, i) => {
          const colors = ["bg-purple-100 text-purple-700", "bg-pink-100 text-pink-700", "bg-blue-100 text-blue-700"];
          return (
            <span
              key={h}
              className={`rounded-full px-3 py-1 text-xs font-medium ${colors[i % colors.length]}`}
            >
              {h}
            </span>
          );
        })}
      </div>

      <div className="mt-8 glass rounded-3xl p-8">
        <Section title="背景与问题" index={0}>
          <p>{c.background}</p>
        </Section>

        <Section title="目标与指标" index={1}>
          <p>{c.goals}</p>
        </Section>

        <Section title="用户与场景" index={2}>
          <p>{c.users}</p>
        </Section>

        <Section title="方案设计" index={3}>
          <ol className="list-inside list-decimal space-y-2">
            {c.solution.map((step, i) => (
              <li key={i}>{step.replace(/^\d+\.\s*/, "")}</li>
            ))}
          </ol>
        </Section>

        <Section title="关键决策与取舍" index={4}>
          <p>{c.decisions}</p>
        </Section>

        <Section title="验证方式与结果" index={5}>
          <p>{c.validation}</p>
        </Section>

        <Section title="复盘与下一步" index={6}>
          <p>{c.retrospective}</p>
        </Section>
      </div>
    </article>
  );
}
