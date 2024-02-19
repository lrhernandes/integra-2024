import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
  return <div className="bg-white p-8 rounded-lg">{children}</div>;
};

export { Wrapper };
