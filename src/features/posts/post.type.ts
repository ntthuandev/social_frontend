import { TUserProfile } from "../users/user.type";

export type TPost = {
  id: string;
  content: string;
  tags: string[];
  imageUrls: string[];
  createdAt: Date;
  updatedAt: DataTransfer;
  isSaved: boolean;
  isLiked: boolean;
  likeCount: number;
  savedCount: number;
  commentCount: number;
  creator: TUserProfile;
};

type TPagination = {
  currentPage: number;
  totalPosts: number;
  totalPages: number;
};

export type TGetPostsResponse = {
  posts: TPost[];
  pagination: TPagination;
};

export type TGetPostDetails = {
  post: TPost;
};
