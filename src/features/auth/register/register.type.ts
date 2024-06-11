import { z } from "zod";

export const RegisterShema = z
  .object({
    fullname: z.string().min(1, { message: "Vui lòng điền họ tên" }),
    username: z.string().min(1, { message: "Vui lòng điền tên đăng nhập" }),
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z.string().min(1, { message: "Vui lòng nhập mật khẩu" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Vui lòng nhập lại mật khẩu" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu nhập lại không chính xác",
  });

export type TRegister = z.infer<typeof RegisterShema>;
export type TRegisterData = Omit<TRegister, "confirmPassword">;
