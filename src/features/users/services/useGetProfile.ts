import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../user.api";
import { TGetProfile } from "../user.type";

const useGetProfile = (username: string) => {
  return useQuery<TGetProfile>({
    queryKey: ["profile", username],
    queryFn: () => getProfile(username),
  });
};

export default useGetProfile;
