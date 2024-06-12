import { useAuth } from "@/contexts/AuthContext";
import { useFormContext } from "react-hook-form";
import { PostFormData } from "./MangageFormCreatePost";

const ContentForm = () => {
  const { register, setValue } = useFormContext<PostFormData>();
  const { user } = useAuth();

  register("tags");
  const handleSetTags = (tagsSting: string) => {
    const tagsArray = tagsSting.trim().split("#").slice(1);
    console.log(tagsArray);
    setValue("tags", tagsArray);
  };
  return (
    <div className="flex-1 p-3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src={user?.profileImage}
            alt="profileImage"
            className="size-10 object-cover rounded-full"
          />
          <p>{user?.username}</p>
        </div>
        <div className="w-full">
          <textarea
            placeholder="Viết nội dung..."
            className="w-full base-normal outline-none"
            rows={6}
            {...register("content")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tags">Thêm tags (#tag)</label>
          <input
            type="text"
            id="tag"
            className="w-full base-normal outline-none"
            placeholder="Thêm tags..."
            onChange={(e) => handleSetTags(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentForm;
