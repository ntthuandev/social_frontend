import Like from "@/features/Like/Like";
import { TPost } from "../post.type";
import { Comment } from "@/features/comments";
import { Save } from "@/features/save";

type PostContactProps = {
  post: TPost;
};
const PostContact = ({ post }: PostContactProps) => {
  return (
    <div className="mt-2">
      <div className="flex-between">
        <div className="flex gap-4 items-center">
          <Like postId={post.id} isLiked={post.isLiked} />
          <Comment post={post} />
        </div>
        <div>
          <Save postId={post.id} isSaved={post.isSaved} />
        </div>
      </div>
      <span className="small-medium">{post.likeCount} lượt thích</span>
    </div>
  );
};

export default PostContact;
