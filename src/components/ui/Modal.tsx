import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ModalProps = {
  shouldShow: boolean;
  close: () => void;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const Modal = ({ shouldShow, close, children, className }: ModalProps) => {
  return (
    <>
      {shouldShow && (
        <div
          className="fixed flex-center z-50 left-0 top-0 flex items-center overflow-auto bg-black/50  w-full h-full"
          onClick={close}
        >
          <div
            className={cn(
              "bg-white w-1/2 overflow-y-auto rounded-md shadow-sm ",
              className
            )}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
