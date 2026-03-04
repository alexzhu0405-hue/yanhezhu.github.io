import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Yanhe Zhu. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="mailto:your@email.com" className="hover:text-neutral-900 transition-colors">
            邮箱
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <span className="text-neutral-300">|</span>
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            English (coming soon)
          </Link>
        </div>
      </div>
    </footer>
  );
}
