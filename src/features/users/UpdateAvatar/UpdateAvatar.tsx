import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import ManageUpdateAvatarForm from "./ManageUpdateAvatarForm";

type UpdateAvatarProps = {
  profile: TUserProfile;
};
const UpdateAvatar = ({ profile }: UpdateAvatarProps) => {
  const [shouldShowUpdateAvatar, setShouldUpdateAvatar] = useState(false);

  const onClose = () => setShouldUpdateAvatar(false);
  return (
    <div>
      <Button
        variant="text"
        className="p-1 hover:bg-blue-100"
        onClick={() => setShouldUpdateAvatar(true)}
      >
        Thay ảnh đại diện
      </Button>
      <Modal shouldShow={shouldShowUpdateAvatar} close={onClose}>
        <ManageUpdateAvatarForm profile={profile} />
      </Modal>
    </div>
  );
};

export default UpdateAvatar;
