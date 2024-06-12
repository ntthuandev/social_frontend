import { useMutation } from "@tanstack/react-query";
import { createPost } from "../post.api";
import { useNavigate } from "react-router-dom";

const useCreatePost = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (postData: FormData) => createPost(postData),
    onSuccess: () => {
      navigate(0);
    },
  });
};

export default useCreatePost;
