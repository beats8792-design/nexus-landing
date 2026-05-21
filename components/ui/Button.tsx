import React from "react";

const variantStyle = {
  primary: "bg-primary border-black",
  secondary: "bg-sky-600 border-sky-600",
  outline: "border-white",
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`
        px-6 
        py-2 
        rounded-lg 
        hover:bg-primary-container 
        transition-all 
        active:scale-95 
        text-on-primary 
        font-label-md 
        text-label-md 
        cursor-pointer 
        border-2 
        text-white 
        ${variantStyle[props.variant || "primary"]}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
