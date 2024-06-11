import { useMutation } from "@tanstack/react-query";
import { TLogin } from "../login.type";
import { loginByUserNameAndPassword } from "../login.api";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "@/lib/react-router";

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (loginData: TLogin) => loginByUserNameAndPassword(loginData),
    onSuccess: () => {
      navigate(pathKeys.root);
    },
  });
};

export default useLogin;
