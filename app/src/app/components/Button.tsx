"use client";
import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  type: "primary" | "secondary";
  action: () => void;
  disabled?: boolean;
  text?: string;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  type,
  action,
  disabled,
  text,
  icon,
}) => {
  const buttonClasses = `
        ${type === "primary" ? "bg-purple-700 hover:bg-purple-900" : ""}
        ${type === "secondary" ? "bg-gray-500 hover:bg-gray-700" : ""}
        text-white font-bold py-2 px-4 rounded flex flex-row justify-center items-center gap-2
    `;

  return (
    <button
      className={buttonClasses}
      onClick={() => action}
      disabled={disabled}
    >
      {icon && <span>{React.createElement(icon)}</span>}
      {text}
    </button>
  );
};

export default Button;
