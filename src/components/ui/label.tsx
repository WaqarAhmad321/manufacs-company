import { cn } from "@/lib/utils";
import React from "react";

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...props
}) => {
  return (
    <label
      className={cn("font-manrope text-base text-black", className)}
      {...props}
    />
  );
};

export default Label;
