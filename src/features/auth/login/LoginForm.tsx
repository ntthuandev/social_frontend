import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { pathKeys } from "@/lib/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import { LoginShema, TLogin, TLoginRespone } from "./login.type";
import Loading from "@/components/ui/Loading";
import { useLogin } from "./services";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: loginAccount, isPending: isLogining } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(LoginShema),
  });

  const onSubmit = async (data: TLogin) => {
    const loginDataRes = await loginAccount(data, {
      onError: (error) => setErrorMessage(error.message),
    });
    const { token, ...userInfo } = (loginDataRes as unknown as TLoginRespone)
      .user;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5 bg-white"
    >
      <div className="space-y-2">
        <label htmlFor="username" className="base-semibold">
          Tên đăng nhập
        </label>
        <div className="cs-text-field-auth">
          <span>
            <Icon name="User" />
          </span>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="cs-input-auth"
          />
        </div>
        {errors.username && (
          <span className="small-regular text-error-500">{`${errors.username.message}`}</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="base-semibold">
          Mật khẩu
        </label>
        <div className="cs-text-field-auth">
          <Icon name="Lock" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
            className="cs-input-auth"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            <Icon name={showPassword ? "Eye" : "EyeOff"} />
          </span>
        </div>
        {errors.password && (
          <span className="small-regular text-error-500">{`${errors.password.message}`}</span>
        )}
      </div>
      <Button type="submit" disabled={isLogining}>
        {isLogining ? <Loading /> : "Đăng Nhập"}
      </Button>
      {errorMessage && (
        <span className="text-error-500 small-regular text-center">
          {errorMessage}
        </span>
      )}
      <div className="flex-center">
        <span className="small-medium">Chưa có tài khoản?</span>
        <Link to={pathKeys.register()} className="ml-1 text-primary-500">
          Đăng ký
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
