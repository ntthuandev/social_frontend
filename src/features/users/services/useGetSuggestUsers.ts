import { useInfiniteQuery } from "@tanstack/react-query";
import { getSuggestUsers } from "../user.api";
import { useAuth } from "@/contexts/AuthContext";
import { TGetSuggestUsers } from "../user.type";

const useGetSuggestUsers = () => {
  const { user } = useAuth();
  return useInfiniteQuery<TGetSuggestUsers>({
    queryKey: ["users", "suggesting", user?.id],
    queryFn: ({ pageParam }) => getSuggestUsers(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination?.currentPage < lastPage.pagination?.totalPages)
        return lastPage.pagination.currentPage + 1;
      return undefined;
    },
  });
};
export default useGetSuggestUsers;
