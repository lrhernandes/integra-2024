import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-2/3 flex">{children}</div>
    </div>
  );
};

export default Modal;
