import { useInfiniteQuery } from "@tanstack/react-query";
import { getComments } from "../comment.api";

const useGetComments = (postId: string) => {
  return useInfiniteQuery({
    queryKey: ["comment", postId],
    queryFn: ({ pageParam }) => getComments(postId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.currentPage < lastPage.pagination.totalPages)
        return lastPage.pagination.currentPage + 1;
      return undefined;
    },
  });
};

export default useGetComments;
