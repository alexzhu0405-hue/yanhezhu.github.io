import Card from "@/app/components/Card";
import { cases } from "@/lib/cases";

export const metadata = {
  title: "案例 — 朱彦和",
};

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        案例
      </h1>
      <p className="mt-2 text-neutral-600">
        以下是我参与或主导的产品案例，涵盖需求洞察、方案设计与数据验证。
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
