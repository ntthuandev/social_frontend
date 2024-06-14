import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { PostDetail } from "@/features/posts/PostDetails.tsx";
import { TPost } from "@/features/posts/post.type";

type CommentProps = {
  post: TPost;
};
const Comment = ({ post }: CommentProps) => {
  return (
    <PostDetail post={post}>
      <Button variant="text" className="text-black p-1">
        <Icon name="MessageCircle" />
      </Button>
    </PostDetail>
  );
};

export default Comment;
