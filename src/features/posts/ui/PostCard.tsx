import Silder from "@/components/ui/Silder";
import { TPost } from "../post.type";
import CreatorInfo from "./CreatorInfo";
import PostContact from "./PostContact";
import PostContent from "./PostContent";
import ViewComment from "./ViewComment";

type PostCardProps = {
  post: TPost;
};
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="rounded-lg border p-5 lg:p-7 w-full max-w-screen-sm">
      <CreatorInfo creator={post.creator} createdAt={post.createdAt} />
      <Silder imageUrls={post.imageUrls} />
      <PostContact />
      <PostContent post={post} />
      <ViewComment post={post} />
    </div>
  );
};

export default PostCard;
