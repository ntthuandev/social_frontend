import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";

type UserCardProps = {
  user: TUserProfile;
  isDetail?: boolean;
};

const UserCard = ({ user, isDetail }: UserCardProps) => {
  return (
    <div className="flex-between gap-3">
      <div className="flex items-center gap-1">
        <img
          src={user.profileImage}
          alt="profileImage"
          className="size-16 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="base-semibold">{user.username}</p>
          {isDetail ? (
            <span className="base-regular">{user.fullname}</span>
          ) : null}
          <span className="text-[12px]">Đề xuất cho bạn</span>
        </div>
      </div>
      <Button
        className="hover:opacity-80"
        variant={isDetail ? "filled" : "text"}
      >
        {user.following ? "Đang theo dõi" : "Theo dõi"}
      </Button>
    </div>
  );
};

export default UserCard;
