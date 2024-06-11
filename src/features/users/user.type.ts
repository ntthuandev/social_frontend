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
