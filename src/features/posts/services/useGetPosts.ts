import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../post.api";
import { TGetPostsResponse } from "../post.type";
import { useAuth } from "@/contexts/AuthContext";

const useGetPosts = () => {
  const { user } = useAuth();
  return useInfiniteQuery<TGetPostsResponse>({
    queryKey: ["posts", user?.username],
    queryFn: ({ pageParam }) => getPosts(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.currentPage < lastPage.pagination.totalPages) {
        return lastPage.pagination?.currentPage + 1;
      }
      return undefined;
    },
  });
};

export default useGetPosts;
