import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useEffect, useState } from "react";
import { useFollowing } from "../services";
import Loading from "@/components/ui/Loading";

type FollowingProps = {
  username: string;
  isFollowing: boolean;
  isFilled?: boolean;
};
const Following = ({ username, isFollowing, isFilled }: FollowingProps) => {
  const {
    mutate: followingUser,
    isPending: isFollowPending,
    isSuccess: isFollowingSuccess,
  } = useFollowing(username, isFollowing);
  const [shouldeShowNoti, setShouldShowNoti] = useState(false);
  const onClose = () => setShouldShowNoti(false);
  const handleFollowing = () => {
    followingUser();
  };
  useEffect(() => {
    if (isFollowingSuccess) onClose();
  }, [isFollowingSuccess, followingUser]);
  return (
    <>
      <Button
        variant={isFilled ? "filled" : "text"}
        className="hover:opacity-80"
        onClick={() => setShouldShowNoti(true)}
      >
        {isFollowing ? "Đang theo dõi" : "Theo dõi"}
      </Button>
      <Modal shouldShow={shouldeShowNoti} close={onClose}>
        <div className="flex-center flex-col gap-2 p-5">
          <p className="text-lg text-center">
            Xác nhận {isFollowing ? "bỏ theo dõi " : "theo dõi "}{" "}
            <span className="body-medium">{username}</span>
          </p>
          <div className="h-px w-full bg-gray-200 my-4"></div>
          <Button
            variant="text"
            className="hover:bg-blue-100"
            disabled={isFollowPending}
            onClick={handleFollowing}
          >
            {isFollowPending ? <Loading /> : null}
            {isFollowing ? "Bỏ theo dõi" : "Theo dõi"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Following;
