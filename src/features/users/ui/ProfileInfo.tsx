import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";
import Following from "../Following/Following";
import { useAuth } from "@/contexts/AuthContext";
import ListUserFollowing from "../ListUserFollowing/ListUserFollowing";
import ListUserFollowed from "../ListUserFollowed/ListUserFollowed";

type ProfileInfoProps = {
  profile: TUserProfile;
};
const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  const { user } = useAuth();

  const isCurrentUser = user?.username === profile.username;
  return (
    <div className="flex items-center flex-1 gap-5 md:gap-10 lg:gap-20 pr-5">
      <div>
        <img
          src={profile.profileImage}
          alt="profileImage"
          className="size-48 rounded-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-10">
        <div className="flex-between flex-wrap">
          <h3 className="body-medium">{profile.username}</h3>
          {isCurrentUser ? (
            <Button variant="text" className="text-black p-1">
              Chỉnh sửa
            </Button>
          ) : (
            <Following
              username={profile.username}
              isFollowing={profile.following}
            />
          )}
        </div>
        <div className="flex items-center gap-5 flex-wrap ">
          <div className="flex gap-2">
            <span className="base-semibold">{profile.posts}</span>
            <p>Bài viết</p>
          </div>
          <ListUserFollowed profile={profile} />
          <ListUserFollowing profile={profile} />
        </div>
        {profile.bio ? <p className="small-medium">profile.bio</p> : null}
      </div>
    </div>
  );
};

export default ProfileInfo;
