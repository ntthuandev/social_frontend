import { useParams } from "react-router-dom";
import { useGetPostsUser } from "../services";
import { TPost } from "../post.type";
import ListPostGrid from "../ui/ListPostGrid";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const UserPost = () => {
  const { username } = useParams();
  const { inView, ref: loadMoreRef } = useInView();
  const {
    data,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetPostsUser(username as string);

  const posts = data?.pages.flatMap((page) => {
    return page.posts.map((post: TPost) => post);
  });
  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  if (!data) return null;
  if (!posts) return null;
  if (isLoading) return <span>Đang tải</span>;
  return (
    <div>
      {isSuccess ? (
        <>
          <ListPostGrid posts={posts} />
          <div ref={loadMoreRef}></div>
        </>
      ) : null}
      {isFetchingNextPage ? (
        <span className="text-center base-regular">Đang tải..</span>
      ) : null}
    </div>
  );
};

export default UserPost;
