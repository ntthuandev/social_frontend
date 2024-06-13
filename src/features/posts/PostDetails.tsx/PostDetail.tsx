import { pathKeys } from "@/lib/react-router";
import { TPost } from "../post.type";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "@/components/ui/Modal";
import React, { ReactNode, useState } from "react";
import ManagePostDetail from "./ManagePostDetail";
import { CommentProvider } from "@/features/comments/Context/CommentContext";

type ChildProps = {
  onClick: () => void;
};

type PostDetailsProps = {
  children: ReactNode;
  post: TPost;
};

const PostDetail = ({ post, children }: PostDetailsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [shouldShowPostDetail, setShowPostDetail] = useState(false);

  const showPostDetail = () => {
    navigate(pathKeys.post.createPathPostDetail(post.id), {
      state: { backgroundLocation: location },
    });
    setShowPostDetail(true);
  };

  const onClose = () => {
    setShowPostDetail(false);
    navigate(location.state?.backgroundLocation || pathKeys.root, {
      replace: true,
    });
  };

  const Child = React.Children.only(children);

  if (React.isValidElement(Child)) {
    return (
      <>
        {React.cloneElement(Child as React.ReactElement<ChildProps>, {
          onClick: showPostDetail,
        })}
        <Modal shouldShow={shouldShowPostDetail} close={onClose}>
          <CommentProvider>
            <ManagePostDetail />
          </CommentProvider>
        </Modal>
      </>
    );
  }

  return (
    <>
      {children}
      <Modal shouldShow={shouldShowPostDetail} close={onClose}>
        <ManagePostDetail />
      </Modal>
    </>
  );
};

export default PostDetail;
