import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  icon: React.ReactElement;
  className?: string;
  onclick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onclick,
  className,
}) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition z-10",
        className
      )}
      onClick={onclick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
