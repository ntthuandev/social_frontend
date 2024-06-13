import Slider from "@/components/ui/Slider";
import { TPost } from "../post.type";
import CreatorInfo from "./CreatorInfo";
import PostContact from "./PostContact";
import PostContent from "./PostContent";

import ViewPostDetails from "./ViewPostDetails";

type PostCardProps = {
  post: TPost;
};
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="rounded-lg border p-5 lg:p-7 w-full max-w-screen-sm">
      <CreatorInfo creator={post.creator} createdAt={post.createdAt} />
      <Slider imageUrls={post.imageUrls} />
      <PostContact />
      <PostContent post={post} />
      <ViewPostDetails post={post} />
    </div>
  );
};

export default PostCard;
