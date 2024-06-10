import { ReactNode } from "react";
import Logo from "../ui/Logo";
import authBgImage from "@/assets/images/auth-bg.jpg";

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};
const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="grid gap-4 mx-auto  grid-cols-1 sm:grid-cols-2 h-full w-full">
      <div className="w-full h-full p-8">
        <div className="flex flex-col items-center justify-between h-full">
          <Logo />
          <div className="w-full md:w-1/2 mx-auto">{children}</div>

          <p className="text-center text-balance small-regular capitalize">
            Bằng cách {title} bạn đã đồng ý với các chính sách của chúng tôi
          </p>
        </div>
      </div>
      <div className="relative hidden sm:flex w-full h-screen">
        <img
          src={authBgImage}
          alt="bg-auth"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <p className="bg-slate-200 text-black base-semibold p-3 text-center capitalize rounded-md shadow-sm text-balance">
            Truy cập vào tài khoản của bạn để bắt đầu chia sẻ và kết nối
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
