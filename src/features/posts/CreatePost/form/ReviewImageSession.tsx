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
    <div>
      <div className="flex-between px-5 py-2">
        <Button variant="text" onClick={() => previous?.()}>
          Quay về
        </Button>
        <p className="base-semibold">Ảnh</p>
        <Button variant="text" onClick={() => next?.()}>
          Tiếp tục
        </Button>
      </div>

      <Slider imageUrls={fileUrls} />
    </div>
  );
};

export default ReviewImageSession;
