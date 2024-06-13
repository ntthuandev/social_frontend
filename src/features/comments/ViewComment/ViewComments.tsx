import { useParams } from "react-router-dom";
import { useGetComments } from "../services";
import ListComments from "./ui/ListComments";
import { TComment } from "../comment.type";

const ViewComments = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetComments(postId as string);

  if (isLoading) return <span>Loading...</span>;
  const comments = data?.pages.flatMap((page) => {
    return page.comments.map((comment: TComment) => comment);
  });
  if (!comments) return;
  return (
    <div>
      <ListComments comments={comments} />
    </div>
  );
};

export default ViewComments;
