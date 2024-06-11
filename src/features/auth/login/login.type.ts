import { TUserWithToken } from "@/features/users/user.type";
import { z } from "zod";

export const LoginShema = z.object({
  username: z.string().min(1, { message: "Vui lòng điền tên đăng nhập" }),
  password: z.string().min(1, { message: "Vui lòng điền mật khẩu" }),
});

export type TLogin = z.infer<typeof LoginShema>;

export type TLoginRespone = {
  user: TUserWithToken;
};
