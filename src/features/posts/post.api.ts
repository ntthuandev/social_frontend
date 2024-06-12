import api from "@/lib/api/api";

const URLs = {
  root: "/api/posts",
  create: () => URLs.root,
};

export const createPost = (postData: FormData) => {
  return api.post(URLs.create(), postData);
};
