import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsUser } from "../post.api";
import { TGetPostsResponse } from "../post.type";

const useGetPostsUser = (username: string) => {
  return useInfiniteQuery<TGetPostsResponse>({
    queryKey: ["posts", username],
    queryFn: ({ pageParam }) => getPostsUser(username, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage?.pagination?.currentPage < lastPage?.pagination?.totalPages)
        return lastPage?.pagination?.currentPage + 1;
      return undefined;
    },
    enabled: !!username,
  });
};

export default useGetPostsUser;
