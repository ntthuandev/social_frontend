import { useFormContext } from "react-hook-form";
import FileUploader from "../ui/FileUploader";
import { PostFormData } from "./MangageFormCreatePost";

const SelectImageFilesSection = () => {
  const { register, setValue } = useFormContext<PostFormData>();
  register("imageFiles");

  const handleFieldChange = (files: File[]) => {
    setValue("imageFiles", files);
  };
  return (
    <div className="flex flex-col px-5 py-3 ">
      <div className="p-3 border-b ">
        <p className="text-center body-medium">Tạo bài viết mới</p>
      </div>
      <div>
        <FileUploader fieldChange={handleFieldChange} />
      </div>
    </div>
  );
};

export default SelectImageFilesSection;
