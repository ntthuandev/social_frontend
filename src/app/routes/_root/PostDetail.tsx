import ManagePostDetail from "@/features/posts/PostDetails.tsx/ManagePostDetail";

const PostDetailPage = () => {
  return (
    <div className=" h-full w-full px-10 flex-center">
      <div className="mx-auto  lg:max-w-[70rem] py-10  ">
        <ManagePostDetail />
      </div>
    </div>
  );
};

export default PostDetailPage;
