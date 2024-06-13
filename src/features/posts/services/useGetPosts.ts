import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../post.api";
import { TGetPostsResponse } from "../post.type";

const useGetPosts = () => {
  const { data: posts, isLoading: isGetPostsLoading } =
    useInfiniteQuery<TGetPostsResponse>({
      queryKey: ["posts"],
      queryFn: ({ pageParam }) => getPosts(pageParam as number),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (
          lastPage?.pagination?.currentPage < lastPage?.pagination?.totalPages
        )
          return lastPage?.pagination?.currentPage + 1;
        return undefined;
      },
    });

  return { posts, isGetPostsLoading };
};

export default useGetPosts;
