import { ReactNode } from "react";
import ProfileInfo from "../ui/ProfileInfo";
import { TUserProfile } from "../user.type";
import ProfileNavbar from "./ui/ProfileNavbar";

type ProfileLayoutProps = {
  profile: TUserProfile;
  children: ReactNode;
};

const ProfileLayout = ({ profile, children }: ProfileLayoutProps) => {
  return (
    <div className="overflow-y-scroll h-full w-full">
      <div className="mx-auto max-w-4xl lg:w-3/5 py-10 h-full ">
        <ProfileInfo profile={profile} />
        <ProfileNavbar />
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
