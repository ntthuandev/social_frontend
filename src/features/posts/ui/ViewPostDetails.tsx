import { TPost } from "../post.type";
import { PostDetail } from "../PostDetails.tsx";

type ViewPostDetailsProps = {
  post: TPost;
};
const ViewPostDetails = ({ post }: ViewPostDetailsProps) => {
  return (
    <PostDetail post={post}>
      <p className="cursor-pointer">Xem tất cả {post.commentCount} bình luận</p>
    </PostDetail>
  );
};

export default ViewPostDetails;
