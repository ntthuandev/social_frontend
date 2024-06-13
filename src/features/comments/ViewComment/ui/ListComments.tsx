import { TComment } from "../../comment.type";
import CommentItem from "./CommentItem";

type ListCommentProps = {
  comments: TComment[];
};
const ListComments = ({ comments }: ListCommentProps) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default ListComments;
