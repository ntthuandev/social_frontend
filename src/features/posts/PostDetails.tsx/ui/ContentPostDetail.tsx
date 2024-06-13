import { TPost } from "../../post.type";

type ContentPostDetailsProps = {
  post: TPost;
};
const ContentPostDetail = ({ post }: ContentPostDetailsProps) => {
  const tagsString = `#${post.tags.join("#")}`;

  return (
    <>
      <div className="flex gap-1">
        <p className="base-semibold">
          {post.creator.username}{" "}
          <span className="font-normal text-balance">{post.content}</span>
        </p>
      </div>

      <div className="mt-3">
        <p className="small-medium">HashTags</p>
        <span className="text-primary-600">{tagsString}</span>
      </div>
    </>
  );
};

export default ContentPostDetail;
