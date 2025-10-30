import type { User } from './user'

export interface Post {
  _id: string;
  user: User;
  content: string;
  image_urls: string[];
  post_type: "text_with_image" | "text_only" | string;
  likes_count: string[];
  createdAt: string;
  updatedAt: string;
}