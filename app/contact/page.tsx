export const metadata = {
  title: "联系 — 朱彦和",
};

const contacts = [
  {
    label: "邮箱",
    value: "1412224226@qq.com",
    href: "mailto:1412224226@qq.com",
    icon: "✉️",
    color: "bg-blue-500/20",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    icon: "🔗",
    color: "bg-purple-500/20",
  },
  {
    label: "GitHub",
    value: "github.com/alexzhu0405-hue",
    href: "https://github.com/alexzhu0405-hue",
    icon: "💻",
    color: "bg-teal-500/20",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="hero-gradient-text">联系我</span>
      </h1>
      <p className="mt-4 text-slate-500 leading-relaxed">
        如果你对我的经历感兴趣，或有任何合作想法，欢迎通过以下方式联系。
      </p>

      <div className="mt-10 space-y-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group glass flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),0_0_20px_rgba(96,165,250,0.1)]"
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${c.color} text-xl`}>
              {c.icon}
            </div>
            <div>
              <p className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                {c.label}
              </p>
              <p className="text-sm text-slate-500">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
