import ProfileLayout from "@/features/users/layout/ProfileLayout";
import { useGetProfile } from "@/features/users/services";
import { Outlet, useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const { data: dataProfile, isLoading: isGetUserProfileLoading } =
    useGetProfile(username as string);
  if (isGetUserProfileLoading) return <span>Đang tải</span>;
  if (!dataProfile) return null;
  return (
    <ProfileLayout profile={dataProfile?.profile}>
      <Outlet />
    </ProfileLayout>
  );
};

export default Profile;
