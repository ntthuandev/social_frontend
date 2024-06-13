import { TPost } from "../post.type";
import { useNavigate } from "react-router-dom";

type ViewCommentProps = {
  post: TPost;
};
const ViewComment = ({ post }: ViewCommentProps) => {
  const navigate = useNavigate();
  const showPostDetail = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <p onClick={showPostDetail}>Xem tất cả {post.commentCount} bình luận</p>
  );
};

export default ViewComment;
