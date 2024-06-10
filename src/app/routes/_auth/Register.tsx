import AuthLayout from "@/components/layouts/AuthLayout";
import RegisterForm from "@/features/auth/register/RegisterForm";

const Register = () => {
  return (
    <AuthLayout title="Đăng ký">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
