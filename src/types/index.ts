export interface Author {
  name: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  tags: string[];
  readingTime: number;
  coverImage?: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export interface SiteConfig {
  name: string;
  description: string;
  navLinks: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
}
