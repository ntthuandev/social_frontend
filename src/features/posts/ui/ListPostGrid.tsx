import { TPost } from "../post.type";
import PostGridItem from "./PostGridItem";

type ListPostGridProps = {
  posts: TPost[];
};

const ListPostGrid = ({ posts }: ListPostGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-10">
      {posts.map((post) => (
        <PostGridItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPostGrid;
