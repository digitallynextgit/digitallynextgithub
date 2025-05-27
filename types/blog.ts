import { BlogCategory } from "../data/blogs";

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
export type { BlogCategory };

