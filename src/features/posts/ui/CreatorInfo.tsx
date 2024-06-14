import Icon from "@/components/ui/Icon";
import { useAuth } from "@/contexts/AuthContext";
import { Following } from "@/features/users";
import { TUserProfile } from "@/features/users/user.type";
import { pathKeys } from "@/lib/react-router";
import { multiFormatDateString } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type CreatorInfoProps = {
  creator: TUserProfile;
  createdAt: Date;
};
const CreatorInfo = ({ creator, createdAt }: CreatorInfoProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const navigateToProfile = () => {
    navigate(pathKeys.profile.userProfle(creator.username));
  };
  return (
    <div className="flex-between py-2">
      <div className="flex items-center gap-3">
        <img
          src={creator.profileImage}
          alt="profileImage"
          className="size-9 rounded-full object-cover"
        />
        <div className="flex flex-col md:flex-row items-center ">
          <p
            className="cursor-pointer hover:underline "
            onClick={navigateToProfile}
          >
            {creator.username}
          </p>
          <p className="subtle-semibold lg:small-regular flex">
            <Icon name="Dot" />
            {multiFormatDateString(createdAt.toString())}
          </p>
        </div>
      </div>

      <div>
        {user?.username !== creator.username ? (
          <Following
            username={creator.username}
            isFollowing={creator.following}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CreatorInfo;
