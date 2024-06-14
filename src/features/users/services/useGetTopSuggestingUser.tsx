import { useQuery } from "@tanstack/react-query";
import { getSuggestUsers } from "../user.api";
import { TGetSuggestUsers } from "../user.type";

const useGetTopSuggestingUsers = () => {
  return useQuery<TGetSuggestUsers>({
    queryKey: ["user", "topUser"],
    queryFn: () => getSuggestUsers(1, 5),
  });
};

export default useGetTopSuggestingUsers;
