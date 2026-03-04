export const metadata = {
  title: "联系 — 朱彦和",
};

const contacts = [
  {
    label: "邮箱",
    value: "your@email.com",
    href: "mailto:your@email.com",
    icon: "✉️",
    color: "from-purple-500 to-indigo-500",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    icon: "🔗",
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "GitHub",
    value: "github.com/yourprofile",
    href: "https://github.com/yourprofile",
    icon: "💻",
    color: "from-pink-500 to-rose-500",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">联系我</span>
      </h1>
      <p className="mt-4 text-gray-500 leading-relaxed">
        如果你对我的经历感兴趣，或有任何合作想法，欢迎通过以下方式联系。
      </p>

      <div className="mt-10 space-y-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group glass flex items-center gap-5 rounded-3xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.02]"
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-xl shadow-lg`}>
              {c.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {c.label}
              </p>
              <p className="text-sm text-gray-500">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
