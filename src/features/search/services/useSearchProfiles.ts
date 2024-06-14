import { useInfiniteQuery } from "@tanstack/react-query";
import { searchProfile } from "../search.api";
import { TSearchUserProfiles } from "../search.type";

const useSearchProfiles = (searchString: string) => {
  return useInfiniteQuery<TSearchUserProfiles>({
    queryKey: ["searchProfile", searchString],
    queryFn: ({ pageParam }) =>
      searchProfile(pageParam as number, searchString),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.pagination.currentPage < lastPage.pagination.totalPages)
        return lastPage.pagination.currentPage + 1;
      return undefined;
    },
    enabled: !!searchString,
    refetchOnWindowFocus: true,
  });
};

export default useSearchProfiles;
