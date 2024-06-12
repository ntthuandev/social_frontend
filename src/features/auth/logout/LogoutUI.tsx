import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const LogoutUI = () => {
  const { logout } = useAuth();
  const [shouldShowLogout, setShouldShowLogout] = useState(false);

  const onClose = () => {
    setShouldShowLogout(false);
  };
  return (
    <>
      <li className="rounded-lg base-normal hover:bg-slate-200/60 transition group">
        <Button
          variant="text"
          onClick={() => setShouldShowLogout(true)}
          className="w-full justify-start"
        >
          Đăng xuất
        </Button>
      </li>
      <Modal shouldShow={shouldShowLogout} close={onClose}>
        <div className="flex-center flex-col gap-5 py-10 px-5 text-black ">
          <p className="body-medium capitalize">Đăng xuất</p>
          <span>Bạn cần phải đăng nhập lại</span>
          <div className="w-full h-px bg-gray-200 mx-5 "></div>
          <Button
            variant="text"
            className="text-primary-500 capitalize hover:bg-blue-100"
            onClick={logout}
          >
            Đăng xuất
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default LogoutUI;
