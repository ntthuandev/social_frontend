import { useState } from "react";
import { TPost } from "../post.type";
import Button from "@/components/ui/Button";

type PostContentProps = {
  post: TPost;
};
const PostContent = ({ post }: PostContentProps) => {
  const contentToArray = post.content.split(" ").length;
  const contentLimit = post.content.split(" ").slice(0, 10).toString();
  const tagsString = `#${post.tags.join("#")}`;
  const [showMore, setShowMore] = useState(() => contentToArray > 10);

  return (
    <div>
      <div className="flex gap-1">
        <p className="base-semibold">
          {post.creator.username}{" "}
          <span className="font-normal text-balance">
            {showMore ? `${contentLimit} ...` : post.content}
            {showMore && (
              <Button variant="text" onClick={() => setShowMore(false)}>
                Xem thêm
              </Button>
            )}
          </span>
        </p>
      </div>
      {!showMore ? (
        <div className="mt-3">
          <p className="small-medium">HashTags</p>
          <span className="text-primary-600">{tagsString}</span>
        </div>
      ) : null}
    </div>
  );
};

export default PostContent;
