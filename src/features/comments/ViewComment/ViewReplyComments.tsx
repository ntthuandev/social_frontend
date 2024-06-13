import { useState } from "react";
import { TComment } from "../comment.type";
import ListCommentReply from "./ui/ListCommentReply";

type ViewReplyCommentsProps = {
  parentComment: TComment;
};
const ViewReplyComments = ({ parentComment }: ViewReplyCommentsProps) => {
  const [showReplyComment, setShowReplyComment] = useState(false);
  const toggleShowReplyComment = () => setShowReplyComment((prev) => !prev);
  return (
    <>
      {parentComment.childComments > 0 ? (
        <div className="flex items-center gap-1 ml-3">
          <div className="w-4 h-px bg-slate-500"></div>
          <span
            className="small-semibold cursor-pointer"
            onClick={toggleShowReplyComment}
          >
            {!showReplyComment
              ? `${parentComment.childComments} phản hồi`
              : "Ẩn"}
          </span>
        </div>
      ) : null}
      {showReplyComment ? (
        <ListCommentReply commentId={parentComment.id} />
      ) : null}
    </>
  );
};

export default ViewReplyComments;
