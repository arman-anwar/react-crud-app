import { create } from "zustand";
import type { Post } from "../components/PostList";

type State = {
  posts: Post[];
};

type Actions = {
  setPosts: (posts: Post[]) => void;
  getPosts: () => Post[];
};

const usePostsStore = create<State & Actions>((set, get) => ({
  posts: [],
  setPosts: (posts: Post[]) => set({ posts }),
  getPosts: () => get().posts,
}));

export default usePostsStore;
