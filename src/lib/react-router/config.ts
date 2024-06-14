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
    pathUserProfile() {
      return pathKeys.root.concat(`profile/:username`);
    },
    pathProfileSavePost() {
      return pathKeys.root.concat(`profile/:username/save`);
    },
    userProfle(username: string) {
      return pathKeys.root.concat(`profile/${username}`);
    },
    profileSavePost(username: string) {
      return pathKeys.root.concat(`profile/${username}/save`);
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
