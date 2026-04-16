import Link from "next/link";

const categories = [
  { name: "前端开发", slug: "frontend", count: 24 },
  { name: "后端开发", slug: "backend", count: 18 },
  { name: "DevOps", slug: "devops", count: 12 },
  { name: "数据库", slug: "database", count: 9 },
  { name: "人工智能", slug: "ai", count: 15 },
  { name: "开源项目", slug: "opensource", count: 7 },
];

const popularTags = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Tailwind CSS",
  "Rust",
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 space-y-6">
      {/* 搜索 */}
      <div className="p-4 border border-[var(--border)] rounded-lg bg-[var(--card)]">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
          搜索文章
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="输入关键词..."
            className="w-full px-3 py-2 text-sm border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      {/* 分类 */}
      <div className="p-4 border border-[var(--border)] rounded-lg bg-[var(--card)]">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
          分类
        </h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/categories/${cat.slug}`}
                className="flex items-center justify-between px-2 py-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] rounded-md transition-colors"
              >
                <span>{cat.name}</span>
                <span className="text-xs px-1.5 py-0.5 bg-[var(--secondary)] text-[var(--muted-foreground)] rounded">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/categories"
          className="block mt-3 text-xs text-[var(--primary)] hover:underline"
        >
          查看全部
        </Link>
      </div>

      {/* 标签 */}
      <div className="p-4 border border-[var(--border)] rounded-lg bg-[var(--card)]">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
          热门标签
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-2.5 py-1 text-xs font-medium text-[var(--muted-foreground)] bg-[var(--secondary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] rounded-full transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* 关于 */}
      <div className="p-4 border border-[var(--border)] rounded-lg bg-[var(--card)]">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">
          关于 DevPulse
        </h3>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
          DevPulse 是一个专注于技术分享的平台，汇集优质的技术文章、教程和开发经验，帮助开发者共同成长。
        </p>
        <Link
          href="/about"
          className="inline-block mt-3 text-xs text-[var(--primary)] hover:underline"
        >
          了解更多
        </Link>
      </div>
    </aside>
  );
}
