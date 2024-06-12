import { FormProvider, useForm } from "react-hook-form";
import SelectImageFilesSection from "./SelectImageFilesSection";
import ManageFlowCreatePost from "./ManageFlowCreatePost";

export type PostFormData = {
  content: string;
  tags: string[];
  imageFiles: File[];
};

const MangageFormCreatePost = () => {
  const formMethod = useForm<PostFormData>();

  const { handleSubmit, watch } = formMethod;

  const imageFilesData = watch("imageFiles");

  const onSubmit = (formDataJson: PostFormData) => {
    console.log(formDataJson);
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
