import { useInfiniteQuery } from "@tanstack/react-query";
import { getListFollowing } from "../user.api";

import { TGetSuggestUsers } from "../user.type";

const useGetListFollowing = (username: string) => {
  return useInfiniteQuery<TGetSuggestUsers>({
    queryKey: ["following", username],
    queryFn: ({ pageParam }) => getListFollowing(username, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination?.currentPage < lastPage.pagination?.totalPages)
        return lastPage.pagination.currentPage + 1;
      return undefined;
    },
  });
};
export default useGetListFollowing;
