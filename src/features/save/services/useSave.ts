import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePost } from "../save.api";

const useSavePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => savePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });
};

export default useSavePost;
