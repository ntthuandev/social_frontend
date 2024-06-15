import api from "@/lib/api/api";
import {
  TGetProfile,
  TGetSuggestUsers,
  TUpdateProfileResponse,
} from "./user.type";
import { MutationFunction } from "@tanstack/react-query";

const URLs = {
  root: "/api/profile/",
  getProfile: (username: string) => {
    return URLs.root.concat(username);
  },
  updateProfile: "/api/user",
  getSuggestingUsers: () => {
    return URLs.root.concat("suggest");
  },
  following: (username: string) => {
    return URLs.root.concat(`${username}/follow`);
  },
  listFollowing: (username: string) => {
    return URLs.root.concat(`${username}/following`);
  },
  listFollowed: (username: string) => {
    return URLs.root.concat(`${username}/followed`);
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

export const getListFollowing = (
  username: string,
  page: number = 1
): Promise<TGetSuggestUsers> => {
  return api.get(URLs.listFollowing(username), {
    params: { page },
  });
};
export const getListFollowed = (
  username: string,
  page: number = 1
): Promise<TGetSuggestUsers> => {
  return api.get(URLs.listFollowed(username), {
    params: { page },
  });
};
export const updateProfile: MutationFunction<
  TUpdateProfileResponse,
  FormData
> = (profileData: FormData): Promise<TUpdateProfileResponse> => {
  return api.put(URLs.updateProfile, profileData);
};
