import api from "@/lib/api/api";
import { TGetComments } from "./comment.type";

const URLs = {
  root: "/api/comments/",
  createComment: (postId: string) => {
    return URLs.root.concat(postId);
  },
  getComments: (postId: string) => {
    return URLs.root.concat(postId);
  },
};

export const createComment = (commentData: any, postId: string) => {
  return api.post(URLs.createComment(postId), commentData);
};
export const getComments = (
  postId: string,
  page: number = 1
): Promise<TGetComments> => {
  return api.get(URLs.createComment(postId), { params: { page } });
};
