import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SidebarProps = {
  className?: string;
} & React.ComponentProps<"div">;

const SideMenu: React.FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("w-[240px] border-r border-gray-200", className)}
      {...props}
    >
      <SideBarHeader />
      <SideBarBody />
    </div>
  );
};

export default SideMenu;

type SideBarHeaderProps = {
  className?: string;
} & React.ComponentProps<"div">;

const SideBarHeader: React.FC<SideBarHeaderProps> = ({
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

export type SideBarBodyProps = {
  className?: string;
} & React.ComponentProps<"div">;
const SideBarBody: React.FC<SideBarBodyProps> = ({ className, ...props }) => {
  return <div className={cn("", className)} {...props}></div>;
};

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
        "flex item-center gap-1 border-b border-inherit py-3 px-2",
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
