import React, { ReactNode } from "react";

type ModalProps = {
  shouldShow: boolean;
  close: () => void;
  children: ReactNode;
};
const Modal = ({ shouldShow, close, children }: ModalProps) => {
  return (
    <>
      {shouldShow && (
        <div
          className="absolute z-50 left-0 top-0 overflow-auto bg-black/80 opacity-60 w-full h-full"
          onClick={close}
        >
          <div
            className="my-[12%] mx-auto bg-white w-1/2"
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
