import ArticleCard from "@/components/ui/ArticleCard";
import Sidebar from "@/components/layout/Sidebar";
import type { Article } from "@/types";

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Next.js 14 App Router 完全指南：从入门到精通",
    excerpt:
      "深入探索 Next.js 14 的 App Router 架构，涵盖服务端组件、客户端组件、流式渲染等核心概念，帮助你构建现代化的 React 应用。",
    content: "",
    author: {
      name: "李明",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liming",
    },
    publishedAt: "2026-04-15",
    tags: ["Next.js", "React"],
    readingTime: 12,
    coverImage: "https://picsum.photos/seed/nextjs/400/300",
  },
  {
    id: "2",
    title: "TypeScript 5.4 高级类型技巧：让你的代码更健壮",
    excerpt:
      "分享 TypeScript 中不常见但极其实用的类型操作技巧，包括条件类型、映射类型、模板字面量类型等，让类型系统成为你的得力助手。",
    content: "",
    author: {
      name: "王芳",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wangfang",
    },
    publishedAt: "2026-04-14",
    tags: ["TypeScript", "类型系统"],
    readingTime: 8,
    coverImage: "https://picsum.photos/seed/typescript/400/300",
  },
  {
    id: "3",
    title: "Docker 与 Kubernetes 实战：构建高可用微服务架构",
    excerpt:
      "从零开始讲解如何用 Docker 容器化应用，并使用 Kubernetes 进行编排。包含真实的 Helm Chart 配置和生产环境部署最佳实践。",
    content: "",
    author: {
      name: "张伟",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zhangwei",
    },
    publishedAt: "2026-04-12",
    tags: ["Docker", "Kubernetes", "DevOps"],
    readingTime: 15,
    coverImage: "https://picsum.photos/seed/docker/400/300",
  },
  {
    id: "4",
    title: "Tailwind CSS v4 新特性解析：原子化 CSS 的未来",
    excerpt:
      "全面解析 Tailwind CSS v4 的新功能，包括全新的 Rust 引擎、Vite 集成改进、CSS-first 配置方式等，以及迁移指南。",
    content: "",
    author: {
      name: "陈静",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chenjing",
    },
    publishedAt: "2026-04-10",
    tags: ["Tailwind CSS", "CSS"],
    readingTime: 6,
    coverImage: "https://picsum.photos/seed/tailwind/400/300",
  },
  {
    id: "5",
    title: "Rust 异步编程：Tokio 运行时深度剖析",
    excerpt:
      "深入理解 Rust 的异步编程模型，从 Future、Waker 到 Tokio 运行时的工作原理，让你写出高效且安全的并发代码。",
    content: "",
    author: {
      name: "刘强",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liuqiang",
    },
    publishedAt: "2026-04-08",
    tags: ["Rust", "异步编程"],
    readingTime: 18,
    coverImage: "https://picsum.photos/seed/rust/400/300",
  },
  {
    id: "6",
    title: "GraphQL 与 REST：如何选择适合你项目的 API 方案",
    excerpt:
      "对比 GraphQL 和 REST 的优劣，分析在不同场景下如何做出正确的技术选型，以及混合使用两者的实践经验。",
    content: "",
    author: {
      name: "赵雪",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zhaoxue",
    },
    publishedAt: "2026-04-06",
    tags: ["GraphQL", "REST", "API"],
    readingTime: 10,
    coverImage: "https://picsum.photos/seed/graphql/400/300",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-10 p-8 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/5 border border-[var(--primary)]/20">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-3">
          欢迎来到 DevPulse
        </h1>
        <p className="text-[var(--muted-foreground)] max-w-2xl">
          探索前沿技术，分享开发经验。在这里，每一篇文章都经过精心筛选，助你在技术之路上不断前进。
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href="/articles"
            className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
          >
            浏览文章
          </a>
          <a
            href="/write"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
          >
            开始写作
          </a>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Article List */}
        <section className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--foreground)]">
              最新文章
            </h2>
            <a
              href="/articles"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              查看全部
            </a>
          </div>

          <div className="space-y-4">
            {mockArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--card)] px-6 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors">
              加载更多
            </button>
          </div>
        </section>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
