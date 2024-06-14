import api from "@/lib/api/api";
import { TGetProfile, TGetSuggestUsers } from "./user.type";

const URLs = {
  root: "/api/profile/",
  getProfile: (username: string) => {
    return URLs.root.concat(username);
  },
  getSuggestingUsers: () => {
    return URLs.root.concat("suggest");
  },
  following: (username: string) => {
    return URLs.root.concat(`${username}/follow`);
  },
};

export const getProfile = (username: string): Promise<TGetProfile> => {
  return api.get(URLs.getProfile(username));
};

export const getSuggestUsers = (
  page: number = 1,
  limit: number = 10
): Promise<TGetSuggestUsers> => {
  return api.get(URLs.getSuggestingUsers(), {
    params: { page, limit },
  });
};

export const followingUser = (username: string) => {
  return api.post(URLs.following(username), null);
};
export const unFollowingUser = (username: string) => {
  return api.delete(URLs.following(username));
};
