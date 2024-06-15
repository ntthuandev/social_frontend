import { useInfiniteQuery } from "@tanstack/react-query";
import { getReplyComments } from "../comment.api";

const useGetReplyComments = (parentCommentId: string) => {
  return useInfiniteQuery({
    queryKey: ["comment", parentCommentId],
    queryFn: ({ pageParam }) => getReplyComments(parentCommentId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage?.pagination?.currentPage < lastPage?.pagination?.totalPages)
        return lastPage.pagination.currentPage + 1;
      return undefined;
    },
  });
};

export default useGetReplyComments;
