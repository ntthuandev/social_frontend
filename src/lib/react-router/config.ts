export const pathKeys = {
  root: "/",
  login() {
    return pathKeys.root.concat("login/");
  },
  register() {
    return pathKeys.root.concat("register/");
  },

  home() {
    return pathKeys.root;
  },
  profile: {
    root() {
      return pathKeys.root.concat("profile/");
    },
  },
  post: {
    root() {
      return pathKeys.root.concat("posts/");
    },
    postDetail() {
      return pathKeys.post.root().concat(":postId");
    },
    createPathPostDetail(postId: string) {
      return pathKeys.post.root().concat(postId);
    },
  },
  explore() {
    return pathKeys.root.concat("explore/");
  },
  page404() {
    return pathKeys.root.concat("404/");
  },
  catchAll() {
    return "*";
  },
};
