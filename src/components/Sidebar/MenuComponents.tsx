import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronsLeft } from "lucide-react";

// SideMenuHeader
export type SideBarHeaderProps = {
  className?: string;
  isOpen: boolean;
  handleOpenChange: (open: boolean) => void;
} & React.ComponentProps<"div">;

export const SideMenuHeader: React.FC<SideBarHeaderProps> = ({
  className,
  isOpen,
  handleOpenChange,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex item-center gap-1 border-b border-inherit py-3 px-2 relative",
        className
      )}
      {...props}
    >
      <Image
        className="w-7 h-6"
        src="/logo.svg"
        alt="logo"
        width={28}
        height={24}
      />
      <p className="">Resumizeme</p>

      {/* Close button for mobile */}

      <button
        onClick={() => handleOpenChange(false)}
        className="md:hidden absolute top-1/2 transform -translate-y-1/2 right-4 hover:bg-zinc-100 rounded-full p-1"
      >
        <ChevronsLeft className="text-gray-700" width={18} height={18} />
      </button>
    </div>
  );
};

// SideMenuHeader Ends

// SideBar MenuItem

export type SideMenuItemProps = {
  className?: string;
  classNameLabel?: string;
  icon: React.ReactNode;
  label: string;
  labelProps?: React.ComponentProps<"p">;
  variant?: "default" | "heading";
} & React.ComponentProps<"div">;

export const SideMenuItem: React.FC<SideMenuItemProps> = ({
  className,
  icon,
  label,
  labelProps,
  classNameLabel,
  variant = "default",
  ...props
}) => {
  const variantClass = {
    default: "",
    heading: "font-bold",
  };
  return (
    <div
      className={cn(
        "flex text-sm items-center gap-1 py-3 px-2 whitespace-nowrap",
        className
      )}
      {...props}
    >
      {icon}
      <p
        className={cn(
          "truncate w-full ",
          variantClass[variant],
          classNameLabel
        )}
        {...labelProps}
      >
        {label}
      </p>
    </div>
  );
};

// SideBar MenuItem Ends
