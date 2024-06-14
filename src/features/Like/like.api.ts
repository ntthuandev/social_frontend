import api from "@/lib/api/api";

const URLs = {
  root: "/api/posts/",
  like: (postId: string) => {
    return URLs.root.concat(`like/${postId}`);
  },
};

export const likePost = (postId: string) => {
  return api.post(URLs.like(postId), null);
};
export const unLikePost = (postId: string) => {
  return api.delete(URLs.like(postId));
};
