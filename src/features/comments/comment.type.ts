import { TUserProfile } from "../users/user.type";

export type TComment = {
  id: string;
  author: TUserProfile;
  content: string;
  createdAt: Date;
  parentCommentId: string;
  childComments: number;
  postId: number;
  updatedAt: Date;
};

type TPagination = {
  currentPage: number;
  totalPages: number;
  totalComments: number;
};

export type TGetComments = {
  comments: TComment[];
  pagination: TPagination;
};
