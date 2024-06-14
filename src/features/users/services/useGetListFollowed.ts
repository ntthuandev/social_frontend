import { useInfiniteQuery } from "@tanstack/react-query";
import { getListFollowed } from "../user.api";

import { TGetSuggestUsers } from "../user.type";

const useGetListFollowed = (username: string) => {
  return useInfiniteQuery<TGetSuggestUsers>({
    queryKey: ["followers", username],
    queryFn: ({ pageParam }) => getListFollowed(username, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.pagination?.currentPage < lastPage.pagination?.totalPages)
        return lastPage.pagination.currentPage + 1;
      return undefined;
    },
  });
};
export default useGetListFollowed;
