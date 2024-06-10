import logoImage from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex-start">
      <img src={logoImage} alt="logo" className="h-20 " />
    </div>
  );
};

export default Logo;
