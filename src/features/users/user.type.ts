export type TUser = {
  id: string;
  email: string;
  username: string;
  fullname: string;
  profileImage: string;
  bio: string;
};

export type TUserWithToken = TUser & {
  token: string;
};
export type TUserProfile = Omit<TUser, "id"> & {
  following: boolean;
  posts: number;
  followedUsers: number;
  followingUsers: number;
};

export type TGetProfile = {
  profile: TUserProfile;
};

type TPagination = {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
};
export type TGetSuggestUsers = {
  users: TUserProfile[];
  pagination: TPagination;
};

export type TUpdateProfileResponse = {
  user: TUser;
};
