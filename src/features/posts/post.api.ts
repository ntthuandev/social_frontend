import api from "@/lib/api/api";
import { TGetPostsResponse } from "./post.type";

const URLs = {
  root: "/api/posts",
  create: () => URLs.root,
  getPosts: () => URLs.root.concat("/feeds"),
};

export const createPost = (postData: FormData) => {
  return api.post(URLs.create(), postData);
};

export const getPosts = (page: number = 1): Promise<TGetPostsResponse> => {
  return api.get(URLs.getPosts(), { params: { page } });
};
