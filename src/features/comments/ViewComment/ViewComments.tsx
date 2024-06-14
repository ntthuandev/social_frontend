import { useParams } from "react-router-dom";
import { useGetComments } from "../services";
import ListComments from "./ui/ListComments";
import { TComment } from "../comment.type";
import Button from "@/components/ui/Button";

const ViewComments = () => {
  const { postId } = useParams();
  const { data, isLoading, isFetchingNextPage, fetchNextPage } = useGetComments(
    postId as string
  );
  if (!data) return null;

  const comments = data?.pages.flatMap((page) => {
    return page.comments.map((comment: TComment) => comment);
  });

  const { totalComments, currentPage } =
    data?.pages[data.pages.length - 1].pagination;
  const countPastComment = totalComments - currentPage * 10;

  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  if (isLoading) return <span>Đang tải...</span>;
  if (!comments) return null;
  return (
    <div>
      <ListComments comments={comments} />
      {isFetchingNextPage ? <span> Loading</span> : null}
      {countPastComment > 1 ? (
        <div>
          <Button variant="text" onClick={handleFetchNextPage}>
            Xem thêm {countPastComment} bình luận
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ViewComments;
