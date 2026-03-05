import Link from "next/link";

const tagColors = [
  "bg-blue-500/15 text-blue-400",
  "bg-purple-500/15 text-purple-400",
  "bg-teal-500/15 text-teal-400",
  "bg-pink-500/15 text-pink-400",
  "bg-amber-500/15 text-amber-400",
  "bg-indigo-500/15 text-indigo-400",
];

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
      className="group relative block overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),0_0_20px_rgba(96,165,250,0.1)] hover:-translate-y-2"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{summary}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColors[i % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
