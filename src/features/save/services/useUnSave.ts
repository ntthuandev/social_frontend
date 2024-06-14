import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unSavePost } from "../save.api";

const useUnSavePost = (postId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => unSavePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
};

export default useUnSavePost;
