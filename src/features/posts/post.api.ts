import api from "@/lib/api/api";
import { TGetPostDetails, TGetPostsResponse } from "./post.type";

const URLs = {
  root: "/api/posts/",
  create: () => URLs.root,
  getPosts: () => URLs.root.concat("feeds"),
  getPost: (postId: string) => URLs.root.concat(postId),
  getPostsUser: (username: string) => URLs.root.concat(`user/${username}`),
  getPostsSaved: () => URLs.root.concat(`my/save`),
};

export const createPost = (postData: FormData) => {
  return api.post(URLs.create(), postData);
};

export const getPosts = (page: number = 1): Promise<TGetPostsResponse> => {
  return api.get(URLs.getPosts(), { params: { page } });
};
export const getPost = (postId: string): Promise<TGetPostDetails> => {
  return api.get(URLs.getPost(postId));
};

export const getPostsUser = (
  username: string,
  page: number = 1
): Promise<TGetPostsResponse> => {
  return api.get(URLs.getPostsUser(username), { params: { page } });
};

export const getPostsSaved = (page: number = 1): Promise<TGetPostsResponse> => {
  return api.get(URLs.getPostsSaved(), { params: { page } });
};
