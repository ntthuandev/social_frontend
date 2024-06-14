import Button from "@/components/ui/Button";
import { Bookmark } from "lucide-react";
import { useSavePost, useUnSavePost } from "./services";

type SaveProps = {
  postId: string;
  isSaved: boolean;
};
const Save = ({ postId, isSaved }: SaveProps) => {
  const { mutate: savePost } = useSavePost(postId);
  const { mutate: unSavePost } = useUnSavePost(postId);

  const handleSavePost = () => {
    if (isSaved) unSavePost();
    else savePost();
  };
  return (
    <Button variant="text" className="p-1 " onClick={handleSavePost}>
      <Bookmark
        strokeWidth={1.5}
        className={`stroke-black hover:opacity-70 ${
          isSaved ? "fill-yellow-500 stroke-none" : ""
        }`}
      />
    </Button>
  );
};

export default Save;
