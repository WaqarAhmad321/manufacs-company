import { cn } from "@/lib/utils";
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  return (
    <label
      className={cn("font-manrope text-base text-white", className)}
      {...props}
    />
  );
};

export default Label;
