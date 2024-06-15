import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdateProfile } from "../services";
import Loading from "@/components/ui/Loading";

const ProfileInfoSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  bio: z.string(),
});

type TProfileInfo = z.infer<typeof ProfileInfoSchema>;

const ManageProfileUpdateInfo = () => {
  const { user } = useAuth();
  const { mutate: updateProfileInfo, isPending: isUpdateProfilePending } =
    useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProfileInfo>({
    resolver: zodResolver(ProfileInfoSchema),
    defaultValues: {
      fullname: user?.fullname || "",
      email: user?.email || "",
      bio: user?.bio || "",
    },
  });

  const onSubmit = (values: TProfileInfo) => {
    const formData = new FormData();

    formData.append("fullname", values.fullname);
    formData.append("email", values.email);
    formData.append("bio", values.bio);
    updateProfileInfo(formData);
  };
  return (
    <form
      className="space-y-2 px-5 md:px-8 lg:px-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname" className="base-semibold">
          Họ tên
        </label>
        <input
          type="text"
          id="fullname"
          {...register("fullname")}
          className="cs-input-profile"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="base-semibold">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="cs-input-profile"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="bio" className="base-semibold">
          Bio
        </label>
        <input
          type="text"
          id="bio"
          {...register("bio")}
          className="cs-input-profile"
        />
      </div>
      <div className="flex-center">
        <Button disabled={isUpdateProfilePending} type="submit">
          {isUpdateProfilePending ? <Loading /> : "Cập nhật"}
        </Button>
      </div>
    </form>
  );
};

export default ManageProfileUpdateInfo;
