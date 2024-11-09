"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  SideMenuHeader,
  SideMenuItem,
} from "@/components/Sidebar/MenuComponents";
import {
  ArrowRight,
  ArrowRightCircle,
  FileText,
  PlusCircle,
  Presentation,
  Search,
  Settings,
} from "lucide-react";
import { SIDEBAR_BOARD_ITEMS, SIDEBAR_ITEMS } from "./constant";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { X } from "lucide-react"; // Icon to close the sidebar on mobile

type SidebarProps = {
  className?: string;
} & React.ComponentProps<"div">;

const SideMenu: React.FC<SidebarProps> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false); // Default to closed on mobile

  const handleOpenChange = () => setIsOpen(!isOpen); // Toggle the sidebar

  return (
    <>
      {/* Button to open sidebar on small screens */}
      <button
        onClick={handleOpenChange}
        className="md:hidden py-2 my-2 bg-gray-200 rounded-full fixed top-4 -left-4 z-50"
      >
        <ArrowRight className="text-gray-700 pl-3" width={48} />
      </button>

      {/* Sidebar overlay for mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity",
          { "opacity-0 pointer-events-none": !isOpen }
        )}
        onClick={handleOpenChange}
      />
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white z-50 transition-transform transform border-r duration-500 border-gray-200 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full", // Slide in and out on mobile
          "md:translate-x-0 md:relative md:flex", // Show as a regular sidebar on medium screens
          className
        )}
        {...props}
      >
        <SideMenuHeader handleOpenChange={handleOpenChange} isOpen={isOpen} />

        <ScrollArea className="flex-grow">
          <div>
            <SideMenuItem
              icon={<FileText />}
              label="My templates"
              variant="heading"
            />
            <SideMenuItem icon={<Search />} label="Search" variant="heading" />

            {SIDEBAR_ITEMS.map((data) =>
              data.items.map((item, index1) => (
                <SideMenuItem
                  icon={
                    <data.icon
                      width={16}
                      height={16}
                      className={data.className + " min-w-4 min-h-4"}
                    />
                  }
                  label={item}
                  key={index1}
                />
              ))
            )}
            <div className="flex items-center justify-between">
              <SideMenuItem
                icon={
                  <Presentation width={16} height={16} className="w-4 h-4" />
                }
                label="My boards"
                variant="heading"
              />
              <PlusCircle
                width={16}
                height={16}
                className="mr-4 text-gray-400"
              />
            </div>

            {SIDEBAR_BOARD_ITEMS.map((data) =>
              data.items.map((item, index1) => (
                <SideMenuItem
                  icon={
                    <data.icon
                      width={16}
                      height={16}
                      className={data.className}
                    />
                  }
                  label={item}
                  key={index1}
                />
              ))
            )}
          </div>
        </ScrollArea>

        <ScrollArea className="min-h-[200px] h-[20vh] border-t border-gray-200">
          <div>
            <div className="p-4 flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/users/u1.png"
                  alt="user"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <p>Carla</p>
              </div>
              <Settings width={18} height={18} />
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default SideMenu;
