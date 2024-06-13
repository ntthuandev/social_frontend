import Button from "@/components/ui/Button";
import { TComment } from "../../comment.type";
import { multiFormatDateString } from "@/lib/utils";

type CommentItemProps = {
  comment: TComment;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="my-1">
      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          <img
            src={comment?.author?.profileImage}
            alt="profileImage"
            className="size-8 rounded-full object-cover"
          />
          <p className="base-semibold ">
            {comment.author.username}

            <span className="ml-1 font-normal text-balance">
              {comment.content}
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-[12px]">
          {multiFormatDateString(comment.createdAt.toString())}
        </span>
        {comment.childComments > 0 ? (
          <span className="small-semibold">
            {comment.childComments} phản hồi
          </span>
        ) : null}
        <Button variant="text">Phản hồi</Button>
      </div>
    </div>
  );
};

export default CommentItem;
