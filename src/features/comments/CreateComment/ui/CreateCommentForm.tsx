import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CommentShema = z.object({
  content: z.string(),
});

type TComment = z.infer<typeof CommentShema>;

type CreateCommentFormProps = {
  onSave: (commentData: any) => void;
  isLoading: boolean;
};
const CreateCommentForm = ({ onSave, isLoading }: CreateCommentFormProps) => {
  const { register, handleSubmit, watch } = useForm<TComment>();
  const contentComment = watch("content");

  const onSubmit = (data: TComment) => {
    console.log(data);
    onSave(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex border-top">
        <input
          type="text"
          {...register("content")}
          className="w-full px-1 py-2 base-normal outline-none"
          placeholder="Thêm bình luận"
        />
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
