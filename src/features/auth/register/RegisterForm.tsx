import Button from "@/components/ui/Button";
import { pathKeys } from "@/lib/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterShema, TRegister } from "./register.type";
import Loading from "@/components/ui/Loading";
import { useRegister } from "./services";
import { useState } from "react";

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutateAsync: registerAccount, isPending: isRegistering } =
    useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(RegisterShema),
  });

  const onSubmit = async (data: TRegister) => {
    const { confirmPassword, ...dataWithoutConfirmPassword } = data;
    await registerAccount(dataWithoutConfirmPassword, {
      onError: (error) => {
        setErrorMessage(error.message);
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-1 bg-white"
    >
      <div className="space-y-1">
        <label htmlFor="fullname" className="base-semibold capitalize">
          Họ tên
        </label>
        <div className="cs-text-field-auth">
          <input
            type="text"
            id="fullname"
            {...register("fullname")}
            className="cs-input-auth"
            placeholder="Nguyen Thanh Thuan"
          />
        </div>
        {errors.fullname && (
          <span className="text-error-500 small-regular">{`${errors.fullname.message}`}</span>
        )}
      </div>
      <div className="space-y-1">
        <label htmlFor="username" className="base-semibold capitalize">
          Tên đăng nhập
        </label>
        <div className="cs-text-field-auth">
          <input
            type="text"
            id="username"
            {...register("username")}
            className="cs-input-auth"
            placeholder="thanhthuan"
          />
        </div>
        {errors.username && (
          <span className="text-error-500 small-regular">{`${errors.username.message}`}</span>
        )}
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="base-semibold capitalize">
          Email
        </label>
        <div className="cs-text-field-auth">
          <input
            type="email"
            id="email"
            {...register("email")}
            className="cs-input-auth"
            placeholder="thuan@gmail.com"
          />
        </div>
        {errors.email && (
          <span className="text-error-500 small-regular">{`${errors.email.message}`}</span>
        )}
      </div>
      <div className="space-y-1 ">
        <label htmlFor="password" className="base-semibold capitalize">
          Mật khẩu
        </label>
        <div className="cs-text-field-auth">
          <input
            type="password"
            id="password"
            {...register("password")}
            className="cs-input-auth"
          />
        </div>
        {errors.password && (
          <span className="text-error-500 small-regular">{`${errors.password.message}`}</span>
        )}
      </div>
      <div className="space-y-1">
        <label htmlFor="confirmPassword" className="base-semibold capitalize">
          Nhập lại mật khẩu
        </label>
        <div className="cs-text-field-auth">
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className="cs-input-auth"
          />
        </div>
        {errors.confirmPassword && (
          <span className="text-error-500 small-regular">{`${errors.confirmPassword.message}`}</span>
        )}
      </div>
      <Button
        type="submit"
        disabled={isRegistering}
        className="capitalize !mt-5"
      >
        {isRegistering ? <Loading /> : "Đăng ký"}
      </Button>
      {errorMessage && (
        <span className="text-error-500 small-regular text-center">
          {errorMessage}
        </span>
      )}
      <div className="flex-center gap-1">
        <span>Đã có tài khoản</span>
        <Link to={pathKeys.login()} className="text-primary-600">
          Đăng nhập
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
