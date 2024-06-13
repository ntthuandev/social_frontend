import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../comment.api";

const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentData: any) => createComment(commentData, postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export default useCreateComment;
