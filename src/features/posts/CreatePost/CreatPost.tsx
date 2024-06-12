import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

const CreatPost = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const onClose = () => {
    setShowCreatePost(false);
  };
  return (
    <>
      <li className="rounded-lg base-normal hover:bg-slate-200/60 transition group">
        <Button
          variant="text"
          className="w-full justify-start  gap-4 items-center p-4 text-black group-hover:!font-medium !font-normal"
          onClick={() => setShowCreatePost(true)}
        >
          <span className="group-hover:scale-105">
            <Icon name="SquarePlus" />
          </span>
          Tạo
        </Button>
      </li>
      <Modal shouldShow={showCreatePost} close={onClose}>
        <div>CreatPost</div>
      </Modal>
    </>
  );
};

export default CreatPost;
