import { TPost } from "../post.type";
import { useGetPostsExplore } from "../services";
import ListPostGrid from "../ui/ListPostGrid";

const ExploreLitsPost = () => {
  const { data, isLoading: isGetPostExploreLoading } = useGetPostsExplore();
  if (!data) return null;
  if (isGetPostExploreLoading) return <span>Đang tải...</span>;
  const posts = data.pages.flatMap((page) =>
    page.posts.map((post: TPost) => post)
  );

  return (
    <div className="max-w-4xl mx-auto">
      <ListPostGrid posts={posts} />
    </div>
  );
};

export default ExploreLitsPost;
