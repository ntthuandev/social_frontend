import api from "@/lib/api/api";
import { TSearchUserProfiles } from "./search.type";

const URLs = {
  root: "api/",
  searchUser: () => {
    return URLs.root.concat("profile");
  },
};

export const searchProfile = (
  page: number = 1,
  search: string
): Promise<TSearchUserProfiles> => {
  return api.get(URLs.searchUser(), {
    params: { page, search },
  });
};
