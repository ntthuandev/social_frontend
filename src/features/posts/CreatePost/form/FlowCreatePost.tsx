import React, { ReactNode } from "react";
type ChildProps = {
  next: () => void;
  previous: () => void;
};
type FlowCreatPostProps = {
  children: ReactNode;
  currentStepIndex: number;
  onNext: () => void;
  onPrevious: () => void;
};

const FlowCreatePost = ({
  children,
  currentStepIndex,
  onNext,
  onPrevious,
}: FlowCreatPostProps) => {
  const next = () => onNext();
  const previous = () => onPrevious();

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild as React.ReactElement<ChildProps>, {
      next,
      previous,
    });
  }
  return currentChild;
};

export default FlowCreatePost;
