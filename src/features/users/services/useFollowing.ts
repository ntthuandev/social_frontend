import { useMutation, useQueryClient } from "@tanstack/react-query";
import { followingUser, unFollowingUser } from "../user.api";
import { useAuth } from "@/contexts/AuthContext";

const useFollowing = (username: string, isFollowing: boolean) => {
  const { user } = useAuth();
  const useQuery = useQueryClient();
  return useMutation({
    mutationFn: () =>
      isFollowing ? unFollowingUser(username) : followingUser(username),
    onSettled: () => {
      useQuery.invalidateQueries({ queryKey: ["profile", username] });
      useQuery.invalidateQueries({
        queryKey: ["users", "suggesting", user?.id],
      });
      useQuery.invalidateQueries({
        queryKey: ["user", "topUser"],
      });
    },
  });
};

export default useFollowing;
