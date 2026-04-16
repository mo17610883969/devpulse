import Link from "next/link";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group p-5 border border-[var(--border)] rounded-lg bg-[var(--card)] hover:border-[var(--primary)]/30 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col sm:flex-row gap-4">
        {article.coverImage && (
          <div className="sm:w-40 sm:h-28 flex-shrink-0 rounded-md overflow-hidden bg-[var(--secondary)]">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-[var(--muted-foreground)]">
              {article.publishedAt}
            </span>
            <span className="text-[var(--border)]">·</span>
            <span className="text-xs text-[var(--muted-foreground)]">
              {article.readingTime} 分钟阅读
            </span>
          </div>

          <Link href={`/articles/${article.id}`}>
            <h2 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors mb-2 line-clamp-2">
              {article.title}
            </h2>
          </Link>

          <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-3">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--secondary)] flex items-center justify-center overflow-hidden">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-[var(--muted-foreground)]">
                {article.author.name}
              </span>
            </div>

            <div className="flex gap-1.5 flex-wrap">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs text-[var(--primary)] bg-[var(--primary)]/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
