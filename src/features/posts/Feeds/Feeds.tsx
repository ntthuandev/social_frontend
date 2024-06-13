import Loading from "@/components/ui/Loading";
import { useGetPosts } from "../services";
import PostCard from "../ui/PostCard";

const Feeds = () => {
  const { posts, isGetPostsLoading } = useGetPosts();

  return (
    <div className="flex-1 flex px-6 py-10 justify-center">
      <div className="max-w-screen-sm lg:w-[640px] mb-10">
        {isGetPostsLoading ? (
          <Loading />
        ) : (
          <div className="flex jusitfy-center flex-col flex-1 gap-9 w-full pb-10">
            {posts?.pages?.map((page) => {
              return page?.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ));
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feeds;
