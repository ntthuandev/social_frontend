import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unLikePost } from "../like.api";

const useUnLike = (postId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => unLikePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
};

export default useUnLike;
