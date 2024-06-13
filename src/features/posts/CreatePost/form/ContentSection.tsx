import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import ContentForm from "./ContentForm";

type ContentSectionType = {
  fileUrls: string[];
  previous?: () => void;
};
const ContentSection = ({ fileUrls, previous }: ContentSectionType) => {
  return (
    <>
      <div className="flex-between px-5 py-2">
        <Button variant="text" onClick={() => previous?.()}>
          Quay về
        </Button>
        <p className="base-semibold">Tạo bài viết mới</p>
        <Button variant="text" type="submit">
          Chia sẻ
        </Button>
      </div>
      <div className="h-px w-full mt-3 bg-gray-300" />
      <div className="flex">
        <div className="flex-1 h-full">
          <Slider imageUrls={fileUrls} />
        </div>
        <ContentForm />
      </div>
    </>
  );
};

export default ContentSection;
