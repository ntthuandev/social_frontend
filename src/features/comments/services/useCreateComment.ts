import { useMutation } from "@tanstack/react-query";
import { createComment } from "../comment.api";

const useCreateComment = (postId: string) => {
  return useMutation({
    mutationFn: (commentData: any) => createComment(commentData, postId),
  });
};

export default useCreateComment;
