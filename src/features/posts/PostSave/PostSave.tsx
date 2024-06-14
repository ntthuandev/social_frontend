import { useGetPostsSaved } from "../services";
import { TPost } from "../post.type";
import ListPostGrid from "../ui/ListPostGrid";

const PostSave = () => {
  const { data, isLoading } = useGetPostsSaved();

  const posts = data?.pages.flatMap((page) => {
    return page.posts.map((post: TPost) => post);
  });

  if (!data) return null;
  if (!posts) return null;
  if (isLoading) return <span>Đang tải</span>;
  return (
    <div>
      <ListPostGrid posts={posts} />
    </div>
  );
};

export default PostSave;
