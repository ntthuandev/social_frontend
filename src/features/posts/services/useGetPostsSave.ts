import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsSaved } from "../post.api";
import { TGetPostsResponse } from "../post.type";

const useGetPostsSaved = () => {
  return useInfiniteQuery<TGetPostsResponse>({
    queryKey: ["posts", "save"],
    queryFn: ({ pageParam }) => getPostsSaved(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.pagination?.currentPage < lastPage?.pagination?.totalPages)
        return lastPage?.pagination?.currentPage + 1;
      return undefined;
    },
  });
};

export default useGetPostsSaved;
