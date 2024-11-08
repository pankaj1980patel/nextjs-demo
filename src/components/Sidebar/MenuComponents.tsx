import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// SideBarHeader
export type SideBarHeaderProps = {
  className?: string;
} & React.ComponentProps<"div">;

export const SideBarHeader: React.FC<SideBarHeaderProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex item-center gap-1 border-b border-inherit py-3 px-2",
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
    </div>
  );
};

// SideBarHeader Ends

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
        className={cn("", variantClass[variant], classNameLabel)}
        {...labelProps}
      >
        {label}
      </p>
    </div>
  );
};

// SideBar MenuItem Ends
