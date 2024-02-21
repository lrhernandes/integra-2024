import React from "react";

type ToastProps = {
  type: "warning" | "error" | "success";
  message: string;
};

const Toast = ({ type, message }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-4 right-4 bg-${
        type == "success" ? "green" : type === "error" ? "red" : "yellow"
      }-500 text-white px-4 py-2 rounded`}
      style={{ zIndex: 9999 }}
    >
      {message}
    </div>
  );
};

export default Toast;
