import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-gray-400 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Yanhe Zhu. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="mailto:1412224226@qq.com" className="transition-colors hover:text-purple-500">
            邮箱
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alexzhu0405-hue"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-500"
          >
            GitHub
          </a>
          <span className="h-3 w-px bg-gray-300" />
          <Link href="/" className="transition-colors hover:text-purple-500">
            English (coming soon)
          </Link>
        </div>
      </div>
    </footer>
  );
}
