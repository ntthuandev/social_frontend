import api from "@/lib/api/api";
import { TLogin } from "./login.type";

const URLs = {
  root: "/api/users",
  login: () => URLs.root.concat("/login"),
};

export const loginByUserNameAndPassword = (loginData: TLogin) => {
  return api.post(URLs.login(), loginData);
};
