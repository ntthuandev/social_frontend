import { useGetPosts } from "../services";
import PostCard from "../ui/PostCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Feeds = () => {
  const { inView, ref: loadMoreRef } = useInView();
  const {
    data: posts,
    isLoading: isGetPostsLoading,
    isSuccess: isGetSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetPosts();

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="flex-1 flex px-6 py-10 justify-center">
      <div className="max-w-screen-sm lg:w-[640px] mb-10">
        {isGetPostsLoading ? <span>Bài viết...</span> : null}
        {isGetSuccess ? (
          <>
            <div className="flex jusitfy-center flex-col flex-1 gap-9 w-full pb-10">
              {posts?.pages?.map((page) => {
                return page?.posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ));
              })}
            </div>
            <div ref={loadMoreRef}></div>
          </>
        ) : null}
        {isFetchingNextPage ? (
          <span className="text-center base-regular">Đang tải..</span>
        ) : null}
      </div>
    </div>
  );
};

export default Feeds;
