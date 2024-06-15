import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import ManageProfileUpdateInfo from "./ManageProfileUpdateInfo";

const UpdateProfileInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);
  return (
    <>
      <Button
        variant="text"
        className="text-black p-1"
        onClick={() => setShowModal(true)}
      >
        Chỉnh sửa
      </Button>
      <Modal shouldShow={showModal} close={onClose}>
        <div className="p-6">
          <div className="flex flex-col ">
            <div className="flex-center flex-col">
              <h3 className="body-medium ">Thay đổi thông tin</h3>
              <div className="h-px w-full bg-gray-200 my-3" />
            </div>

            <ManageProfileUpdateInfo />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateProfileInfo;
