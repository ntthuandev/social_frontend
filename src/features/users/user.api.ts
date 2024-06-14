import api from "@/lib/api/api";
import { TGetProfile } from "./user.type";

const URLs = {
  root: "/api/profile/",
  getProfile: (username: string) => {
    return URLs.root.concat(username);
  },
};

export const getProfile = (username: string): Promise<TGetProfile> => {
  return api.get(URLs.getProfile(username));
};
