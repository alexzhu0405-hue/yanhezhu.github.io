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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
      <div className="mt-3 text-neutral-700 leading-relaxed">{children}</div>
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
        className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        &larr; 返回案例列表
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900">
        {c.title}
      </h1>
      <p className="mt-3 text-lg text-neutral-600">{c.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {c.highlights.map((h) => (
          <span
            key={h}
            className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
          >
            {h}
          </span>
        ))}
      </div>

      <Section title="背景与问题">
        <p>{c.background}</p>
      </Section>

      <Section title="目标与指标">
        <p>{c.goals}</p>
      </Section>

      <Section title="用户与场景">
        <p>{c.users}</p>
      </Section>

      <Section title="方案设计">
        <ol className="list-inside list-decimal space-y-2">
          {c.solution.map((step, i) => (
            <li key={i}>{step.replace(/^\d+\.\s*/, "")}</li>
          ))}
        </ol>
      </Section>

      <Section title="关键决策与取舍">
        <p>{c.decisions}</p>
      </Section>

      <Section title="验证方式与结果">
        <p>{c.validation}</p>
      </Section>

      <Section title="复盘与下一步">
        <p>{c.retrospective}</p>
      </Section>
    </article>
  );
}
