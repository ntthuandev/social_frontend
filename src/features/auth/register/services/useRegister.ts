import { useMutation } from "@tanstack/react-query";
import { TRegisterData } from "../register.type";
import { registerAccount } from "../register.api";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "@/lib/react-router";

const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (registerData: TRegisterData) => registerAccount(registerData),
    onSuccess: () => {
      navigate(pathKeys.login());
    },
  });
};

export default useRegister;
