import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "font-manrope outline-none rounded-md border p-2 text-base text-black",
        className,
      )}
      {...props}
    />
  );
};

export default Input;
