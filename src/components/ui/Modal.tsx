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
          className="fixed z-50 left-0 top-0 flex items-center overflow-auto bg-black/50  w-full h-full"
          onClick={close}
        >
          <div
            className="my-[12%] mx-auto bg-white w-1/2 overflow-y-auto rounded-md shadow-sm "
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
