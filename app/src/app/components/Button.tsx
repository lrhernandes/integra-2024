"use client";
import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  variation: "primary" | "secondary";
  disabled?: boolean;
  text?: string;
  icon?: IconType;
  action?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  variation,
  disabled,
  text,
  icon,
  action,
  type,
  ...props
}) => {
  const buttonClasses = `
        ${variation === "primary" ? "bg-purple-700 hover:bg-purple-900" : ""}
        ${variation === "secondary" ? "bg-gray-500 hover:bg-gray-700" : ""}
        text-white font-bold py-2 px-4 rounded flex flex-row justify-center items-center gap-2
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={action}
      type={type}
      {...props}
    >
      {icon && <span>{React.createElement(icon)}</span>}
      {text}
    </button>
  );
};

export default Button;
