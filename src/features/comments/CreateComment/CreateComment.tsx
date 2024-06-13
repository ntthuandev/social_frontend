import { useParams } from "react-router-dom";
import CreateCommentForm from "./ui/CreateCommentForm";
import { useCreateComment } from "../services";

const CreateComment = () => {
  const { postId } = useParams();
  const { mutate: createComment, isPending: isCreateCommentPending } =
    useCreateComment(postId as string);
  const handleSave = (commentData: any) => {
    createComment(commentData);
  };
  return (
    <CreateCommentForm onSave={handleSave} isLoading={isCreateCommentPending} />
  );
};

export default CreateComment;
