import api from "@/lib/api/api";
import { TRegisterData } from "./register.type";

const URLs = {
  root: "/api/users/",
  register: () => URLs.root.concat("register"),
};

export const registerAccount = (registerData: TRegisterData) => {
  return api.post(URLs.register(), registerData);
};
