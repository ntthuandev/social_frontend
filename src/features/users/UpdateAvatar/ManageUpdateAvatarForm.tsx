import { useForm } from "react-hook-form";
import { TUserProfile } from "../user.type";
import ProfileUploader from "./ProfileUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import { useUpdateProfile } from "../services";
import Loading from "@/components/ui/Loading";

type ManageUpdateAvatarFormProps = {
  profile: TUserProfile;
};
const ProfileAvatarShema = z.object({
  imageFile: z.custom<File[]>(),
});

type TProfileAvatar = z.infer<typeof ProfileAvatarShema>;

const ManageUpdateAvatarForm = ({ profile }: ManageUpdateAvatarFormProps) => {
  const { mutate: updateProfile, isPending: isUpdateProfilePending } =
    useUpdateProfile();
  const { register, handleSubmit, setValue } = useForm<TProfileAvatar>({
    resolver: zodResolver(ProfileAvatarShema),
  });
  register("imageFile");

  const handleFieldChange = (files: File[]) => {
    setValue("imageFile", files);
  };

  const onSubmit = (value: TProfileAvatar) => {
    const formData = new FormData();
    formData.append("imageFile", value.imageFile[0]);
    updateProfile(formData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <h2 className="body-medium text-center">Cập nhật ảnh đại diện</h2>
      <div className="h-px w-full bg-gray-200 my-3" />
      <div className="flex-center flex-col gap-10">
        <ProfileUploader
          mediaUrl={profile.profileImage}
          fieldChange={handleFieldChange}
        />
        <Button disabled={isUpdateProfilePending} type="submit">
          {isUpdateProfilePending ? <Loading /> : "Cập nhật"}
        </Button>
      </div>
    </form>
  );
};

export default ManageUpdateAvatarForm;
