import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";
import Following from "../Following/Following";
import { useAuth } from "@/contexts/AuthContext";
import ListUserFollowing from "../ListUserFollowing/ListUserFollowing";
import ListUserFollowed from "../ListUserFollowed/ListUserFollowed";
import UpdateAvatar from "../UpdateAvatar/UpdateAvatar";
import UpdateProfileInfo from "../UpdateProfileInfo/UpdateProfileInfo";

type ProfileInfoProps = {
  profile: TUserProfile;
};
const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  const { user } = useAuth();

  const isCurrentUser = user?.username === profile.username;
  return (
    <div className="flex items-center flex-1 gap-5 md:gap-10 lg:gap-20 pr-5">
      <div className="flex-center flex-col mb-2">
        <img
          src={profile.profileImage}
          alt="profileImage"
          className="size-48 rounded-full object-cover"
        />
        <UpdateAvatar profile={profile} />
      </div>
      <div className="flex-1 spave-y-3 lg:space-y-5 pb-3">
        <div className="flex-between flex-wrap">
          <h3 className="body-medium">{profile.username}</h3>
          {isCurrentUser ? (
            <UpdateProfileInfo />
          ) : (
            <Following
              username={profile.username}
              isFollowing={profile.following}
            />
          )}
        </div>
        <div className="flex justify-start items-center gap-5 flex-wrap ">
          <div className="flex gap-2 px-4">
            <span className="base-semibold">{profile.posts}</span>
            <p>Bài viết</p>
          </div>
          <ListUserFollowed profile={profile} />
          <ListUserFollowing profile={profile} />
        </div>
        {profile.bio ? <p className="small-medium">{profile.bio}</p> : null}
      </div>
    </div>
  );
};

export default ProfileInfo;
