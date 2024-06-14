import Loading from "@/components/ui/Loading";
import { TComment } from "../../comment.type";
import { useGetReplyComments } from "../../services";
import ListComments from "./ListComments";
import Button from "@/components/ui/Button";

type ListCommentReplyProps = {
  commentId: string;
};

const ListCommentReply = ({ commentId }: ListCommentReplyProps) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useGetReplyComments(commentId);
  const commentReplys = data?.pages.flatMap((page) => {
    return page.comments.map((comment: TComment) => comment);
  });
  if (!data) return null;

  const { totalComments, currentPage } =
    data?.pages[data.pages.length - 1].pagination;

  const countTotalPastReplyCommnet = totalComments - currentPage * 10;

  const handleFetchNextPage = () => {
    fetchNextPage();
  };
  if (!commentReplys) return null;
  if (isLoading) return <Loading />;
  return (
    <div className="ml-3">
      <ListComments comments={commentReplys} />
      {isFetchingNextPage ? <span>Đang tải...</span> : null}
      {countTotalPastReplyCommnet > 0 ? (
        <Button
          variant="text"
          onClick={handleFetchNextPage}
          className="text-black"
        >
          Xem thêm {countTotalPastReplyCommnet} phản hồi
        </Button>
      ) : null}
    </div>
  );
};

export default ListCommentReply;
