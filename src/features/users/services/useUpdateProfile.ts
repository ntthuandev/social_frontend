import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../user.api";
import { TUpdateProfileResponse } from "../user.type";
import { AxiosError } from "axios";
import { useAuth } from "@/contexts/AuthContext";

const useUpdateProfile = () => {
  const { setUser } = useAuth();
  const queryClient = useQueryClient();
  return useMutation<TUpdateProfileResponse, AxiosError, FormData>({
    mutationFn: (profileData: FormData) => updateProfile(profileData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["profile", data?.user.username],
      });
      setUser((prev) => ({ ...prev, ...data.user }));
    },
  });
};

export default useUpdateProfile;
