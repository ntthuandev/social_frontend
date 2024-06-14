import { useParams } from "react-router-dom";
import { useGetPostDetails } from "../services";

import Slider from "@/components/ui/Slider";

import CreatorInfo from "../ui/CreatorInfo";
import ContentPostDetail from "./ui/ContentPostDetail";
import PostContact from "../ui/PostContact";
import { CreateComment, ViewComments } from "@/features/comments";

const ManagePostDetail = () => {
  const { postId } = useParams();

  const { data } = useGetPostDetails(postId as string);

  if (!data) return null;
  return (
    <div className="flex h-[80vh] border">
      <div className="flex-1">
        <Slider imageUrls={data?.post?.imageUrls || []} />
      </div>
      <div className="flex-1 p-2 flex flex-col justify-between">
        <CreatorInfo
          creator={data?.post.creator}
          createdAt={data?.post.createdAt}
        />

        <div className=" flex overflow-y-scroll flex-1  ">
          <div className="flex-1 h-full">
            <ContentPostDetail post={data.post} />

            <ViewComments />
          </div>
        </div>
        <div className="justify-self-end">
          <PostContact post={data.post} />
          <CreateComment />
        </div>
      </div>
    </div>
  );
};

export default ManagePostDetail;
