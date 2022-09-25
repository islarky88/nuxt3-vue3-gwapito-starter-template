import { defineStore } from 'pinia';

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId?: number;
}

export const usePostsStore = defineStore({
  id: 'post-store',
  state: () => {
    return {
      posts: [] as Post[],
    };
  },
  actions: {},
  getters: {},
});
