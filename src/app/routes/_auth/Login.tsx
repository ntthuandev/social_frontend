import AuthLayout from "@/components/layouts/AuthLayout";
import LoginForm from "@/features/auth/login/LoginForm";

const Login = () => {
  return (
    <AuthLayout title="Đăng nhập">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
