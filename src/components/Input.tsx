import React from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  className?: string;
} & React.ComponentProps<"div">;

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <div className={cn("", className)} {...props}></div>;
};

export default Input;
