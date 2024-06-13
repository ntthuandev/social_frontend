import { useQuery } from "@tanstack/react-query";
import { getPost } from "../post.api";

const useGetPostDetails = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
  });
};

export default useGetPostDetails;
