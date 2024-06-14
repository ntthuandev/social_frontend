import { Heart, MessageCircle } from "lucide-react";
import { TPost } from "../post.type";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "@/lib/react-router/config.ts";

type PostGridItemProps = {
  post: TPost;
};
const PostGridItem = ({ post }: PostGridItemProps) => {
  const navigate = useNavigate();
  const navigateToPostDetail = () =>
    navigate(pathKeys.post.creartPathPostDetailPage(post.id));
  return (
    <div className="relative group" onClick={navigateToPostDetail}>
      <div className="w-full h-60 rounded-sm">
        <img
          src={post.imageUrls[0]}
          alt="post-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden group-hover:flex absolute inset-0 w-full h-full bg-black/50 items-center justify-center text-white">
        <div className="flex-center gap-3">
          <div className="flex gap-1 items-center">
            {post.likeCount > 0 && post.likeCount}
            <Heart
              className={`${
                post.isLiked ? "fill-red-500" : "fill-white"
              } stroke-none`}
            />
          </div>
          <div className="flex gap-1 items-center">
            {post.commentCount > 0 && post.commentCount}
            <MessageCircle fill="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostGridItem;
