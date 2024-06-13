import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useComment } from "../../Context/CommentContext";
import Icon from "@/components/ui/Icon";

const CommentShema = z.object({
  content: z.string(),
});

type TComment = z.infer<typeof CommentShema>;

type CreateCommentFormProps = {
  onSave: (commentData: any) => void;
  isLoading: boolean;
};
const CreateCommentForm = ({ onSave, isLoading }: CreateCommentFormProps) => {
  const { selectedComment, handleSelectedComment } = useComment();

  const { register, handleSubmit, watch, reset } = useForm<TComment>();
  const contentComment = watch("content");

  const messagePlaceHolder = selectedComment
    ? `Phản hồi ${selectedComment.author.username}`
    : "Thêm bình luận";
  const onSubmit = (data: TComment) => {
    const dataComment = {
      content: data.content,
      ...(selectedComment && { parentCommentId: selectedComment?.id }),
    };
    onSave(dataComment);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex border-top items-center">
        <input
          type="text"
          {...register("content")}
          className="w-full px-1 py-2 base-normal outline-none"
          placeholder={messagePlaceHolder}
        />
        {selectedComment ? (
          <Button
            variant="text"
            className="hover:bg-blue-100 p-1 rounded-full"
            onClick={() => handleSelectedComment(null)}
          >
            <Icon name="X" size={15} />
          </Button>
        ) : null}
        <Button
          variant="text"
          type="submit"
          disabled={!contentComment || isLoading}
        >
          {isLoading ? <Loading /> : " Gửi"}
        </Button>
      </div>
    </form>
  );
};

export default CreateCommentForm;
