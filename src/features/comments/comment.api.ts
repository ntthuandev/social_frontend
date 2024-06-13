import api from "@/lib/api/api";

const URLs = {
  root: "/api/comments/",
  createComment: (postId: string) => {
    return URLs.root.concat(postId);
  },
};

export const createComment = (commentData: any, postId: string) => {
  return api.post(URLs.createComment(postId), commentData);
};
