import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsExplore } from "../post.api";
import { TGetPostsResponse } from "../post.type";

const useGetPostsExplore = () => {
  return useInfiniteQuery<TGetPostsResponse>({
    queryKey: ["posts", "save"],
    queryFn: ({ pageParam }) => getPostsExplore(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage?.pagination?.currentPage < lastPage?.pagination?.totalPages)
        return lastPage?.pagination?.currentPage + 1;
      return undefined;
    },
  });
};

export default useGetPostsExplore;
