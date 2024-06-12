import { FormProvider, useForm } from "react-hook-form";
import SelectImageFilesSection from "./SelectImageFilesSection";
import ManageFlowCreatePost from "./ManageFlowCreatePost";

export type PostFormData = {
  content: string;
  tags: string[];
  imageFiles: File[];
};

type MangageFormCreatePostProps = {
  onSave: (postData: FormData) => void;
};
const MangageFormCreatePost = ({ onSave }: MangageFormCreatePostProps) => {
  const formMethod = useForm<PostFormData>();

  const { handleSubmit, watch } = formMethod;

  const imageFilesData = watch("imageFiles");

  const onSubmit = (formDataJson: PostFormData) => {
    const formData = new FormData();

    formData.append("content", formDataJson.content);
    formDataJson.tags.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });

    formDataJson.imageFiles.forEach((imageFile) => {
      formData.append("imageFiles", imageFile);
    });
    onSave(formData);
  };

  return (
    <FormProvider {...formMethod}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {imageFilesData ? (
          <ManageFlowCreatePost />
        ) : (
          <SelectImageFilesSection />
        )}
      </form>
    </FormProvider>
  );
};

export default MangageFormCreatePost;
