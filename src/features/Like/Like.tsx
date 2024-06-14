import Button from "@/components/ui/Button";

import { Heart } from "lucide-react";
import { useLike, useUnLike } from "./services";

type LikeProps = {
  postId: string;
  isLiked: boolean;
};
const Like = ({ postId, isLiked }: LikeProps) => {
  const { mutate: likePost } = useLike(postId);
  const { mutate: unLikePost } = useUnLike(postId);

  const handleClick = () => {
    if (isLiked) unLikePost();
    else likePost();
  };

  return (
    <Button variant="text" className="p-1" onClick={handleClick}>
      <Heart
        strokeWidth={1.5}
        className={`stroke-black hover:opacity-70 ${
          isLiked ? "fill-red-500 stroke-none" : ""
        }`}
      />
    </Button>
  );
};

export default Like;
