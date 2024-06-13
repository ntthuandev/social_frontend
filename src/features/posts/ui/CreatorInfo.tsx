import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { TUserProfile } from "@/features/users/user.type";
import { multiFormatDateString } from "@/lib/utils";

type CreatorInfoProps = {
  creator: TUserProfile;
  createdAt: Date;
};
const CreatorInfo = ({ creator, createdAt }: CreatorInfoProps) => {
  return (
    <div className="flex-between py-2">
      <div className="flex items-center gap-3">
        <img
          src={creator.profileImage}
          alt="profileImage"
          className="size-9 rounded-full object-cover"
        />
        <div className="flex flex-col md:flex-row items-center ">
          <p>{creator.username}</p>
          <p className="subtle-semibold lg:small-regular flex">
            <Icon name="Dot" />
            {multiFormatDateString(createdAt.toString())}
          </p>
        </div>
      </div>

      <div>
        <Button variant="text">
          {creator.following ? "Đang theo dõi" : "Theo dõi"}
        </Button>
      </div>
    </div>
  );
};

export default CreatorInfo;
