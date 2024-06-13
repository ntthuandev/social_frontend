import Loading from "@/components/ui/Loading";
import { TComment } from "../../comment.type";
import { useGetReplyComments } from "../../services";
import ListComments from "./ListComments";

type ListCommentReplyProps = {
  commentId: string;
};

const ListCommentReply = ({ commentId }: ListCommentReplyProps) => {
  const { data, isLoading } = useGetReplyComments(commentId);
  const commentReplys = data?.pages.flatMap((page) => {
    return page.comments.map((comment: TComment) => comment);
  });
  if (!commentReplys) return null;
  if (isLoading) return <Loading />;
  return (
    <div className="ml-3">
      <ListComments comments={commentReplys} />
    </div>
  );
};

export default ListCommentReply;
