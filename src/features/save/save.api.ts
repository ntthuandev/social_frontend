import api from "@/lib/api/api";

const URLs = {
  root: "/api/posts/",
  save: (postId: string) => {
    return URLs.root.concat(`save/${postId}`);
  },
  unSave: (postId: string) => {
    return URLs.root.concat(`save/${postId}`);
  },
};

export const savePost = (postId: string) => {
  return api.post(URLs.save(postId), null);
};
export const unSavePost = (postId: string) => {
  return api.delete(URLs.unSave(postId));
};
