import React, { createContext, useContext, useState } from "react";
import { TComment } from "../comment.type";

type CommentProviderProps = {
  children: React.ReactNode;
};
type TCommentContext = {
  selectedComment: TComment | null;
  handleSelectedComment: (comment: TComment | null) => void;
};

const INTIAL_STATE = {
  selectedComment: null,
  handleSelectedComment: () => {},
};
const CommentContext = createContext<TCommentContext>(INTIAL_STATE);

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const [selectedComment, setSelectedComment] = useState<TComment | null>(null);

  const handleSelectedComment = (comment: TComment | null) => {
    setSelectedComment(comment);
  };

  const value = {
    selectedComment,
    handleSelectedComment,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export const useComment = () => {
  const commentContext = useContext(CommentContext);
  if (!commentContext)
    throw new Error("useComment must be use with an CommentProvider");

  return commentContext;
};
