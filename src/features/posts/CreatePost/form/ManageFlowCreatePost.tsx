import { convertFileToUrl } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { PostFormData } from "./MangageFormCreatePost";
import FlowCreatePost from "./FlowCreatePost";
import ReviewImageSession from "./ReviewImageSession";
import ContentSection from "./ContentSection";

const ManageFlowCreatePost = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const { watch } = useFormContext<PostFormData>();
  const imageFilesData = watch("imageFiles");

  useEffect(() => {
    const newFileUrls = imageFilesData.map((file) => convertFileToUrl(file));
    setFileUrls(newFileUrls);
  }, []);

  const next = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };
  const previous = () => {
    setCurrentStepIndex((prev) => prev - 1);
  };
  return (
    <FlowCreatePost
      currentStepIndex={currentStepIndex}
      onNext={next}
      onPrevious={previous}
    >
      <ReviewImageSession fileUrls={fileUrls} />
      <ContentSection fileUrls={fileUrls} />
    </FlowCreatePost>
  );
};

export default ManageFlowCreatePost;
