import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";

type ReviewImageSessionProps = {
  fileUrls: string[];
  next?: () => void;
  previous?: () => void;
};
const ReviewImageSession = ({
  fileUrls,
  next,
  previous,
}: ReviewImageSessionProps) => {
  return (
    <div className="">
      <div className="flex-between px-5 py-2">
        <Button variant="text" onClick={() => previous?.()}>
          Quay về
        </Button>
        <p className="base-semibold">Ảnh</p>
        <Button variant="text" onClick={() => next?.()}>
          Tiếp tục
        </Button>
      </div>
      <div className="h-[60vh]">
        <Slider imageUrls={fileUrls} />
      </div>
    </div>
  );
};

export default ReviewImageSession;
