export type BlogCategory = "Blog" | "Featured" | "Latest" | "Innews";

export interface BlogPost {
  createdAt: string | number | Date;
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  categories: BlogCategory[];
  author: string;
  tags: string[];
}

