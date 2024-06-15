import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsSaved } from "../post.api";
import { TGetPostsResponse } from "../post.type";
import { useAuth } from "@/contexts/AuthContext";

const useGetPostsSaved = () => {
  const { user } = useAuth();
  return useInfiniteQuery<TGetPostsResponse>({
    queryKey: ["posts", "save", user?.id],
    queryFn: ({ pageParam }) => getPostsSaved(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage?.pagination?.currentPage < lastPage?.pagination?.totalPages)
        return lastPage?.pagination?.currentPage + 1;
      return undefined;
    },
  });
};

export default useGetPostsSaved;
