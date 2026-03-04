import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  summary: string;
  tags?: string[];
}

export default function Card({ href, title, summary, tags }: CardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-400 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{summary}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
