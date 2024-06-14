import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost } from "../like.api";

const useLike = (postId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => likePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
};

export default useLike;
