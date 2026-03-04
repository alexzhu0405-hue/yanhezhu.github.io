import Link from "next/link";

const tagColors = [
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-blue-100 text-blue-700",
  "bg-teal-100 text-teal-700",
  "bg-orange-100 text-orange-700",
  "bg-indigo-100 text-indigo-700",
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
      className="group relative block overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.02] hover:-translate-y-1"
    >
      {/* Top accent gradient line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <h3 className="text-lg font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{summary}</p>
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
