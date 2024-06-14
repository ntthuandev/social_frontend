import { TUserProfile } from "../user.type";
import Following from "../Following/Following";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "@/lib/react-router";
import { useAuth } from "@/contexts/AuthContext";

type UserCardProps = {
  user: TUserProfile;
  isDetail?: boolean;
  isSearch?: boolean;
};

const UserCard = ({ user, isDetail, isSearch }: UserCardProps) => {
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const isCurrentUser = currentUser?.username === user.username;

  const navigateToProfile = () =>
    navigate(pathKeys.profile.userProfle(user.username));
  return (
    <div className="flex-between gap-3">
      <div className="flex items-center gap-1">
        <img
          src={user.profileImage}
          alt="profileImage"
          className="size-16 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <p
            className="base-semibold hover:opacity-90 cursor-pointer"
            onClick={navigateToProfile}
          >
            {user.username}
          </p>
          {isDetail ? (
            <>
              <span className="base-regular">{user.fullname}</span>
            </>
          ) : null}
          {isSearch ? (
            <>
              <span className="base-regular">{user.fullname}</span>
            </>
          ) : (
            <span className="text-[12px]">Đề xuất cho bạn</span>
          )}
        </div>
      </div>
      {!isCurrentUser ? (
        <Following
          username={user.username}
          isFollowing={user.following}
          isFilled={isDetail}
        />
      ) : null}
    </div>
  );
};

export default UserCard;
