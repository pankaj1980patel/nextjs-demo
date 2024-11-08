import React from "react";
import { cn } from "@/lib/utils";
import {
  SideBarHeader,
  SideMenuItem,
} from "@/components/Sidebar/MenuComponents";
import {
  FileText,
  PlusCircle,
  Presentation,
  Search,
  Settings,
} from "lucide-react";
import { SIDEBAR_BOARD_ITEMS, SIDEBAR_ITEMS } from "./constant";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
type SidebarProps = {
  className?: string;
} & React.ComponentProps<"div">;

const SideMenu: React.FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "border-r border-gray-200 flex flex-col",
        className
      )}
      {...props}
    >
      <SideBarHeader />
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
                    className={data.className}
                  />
                }
                label={item}
                key={index1}
              />
            ))
          )}
          <div className="flex items-center justify-between">
            <SideMenuItem
              icon={<Presentation width={16} height={16} />}
              label="My boards"
              variant="heading"
            />
            <PlusCircle width={16} height={16} className="mr-4 text-gray-400" />
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
            <div className=" flex items-center gap-3">
              <Image
                src="/users/u1.png"
                alt="user"
                width={32}
                height={32}
                className="rounded"
              />
              <p className="">Carla</p>
            </div>
            <Settings width={18} height={18} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default SideMenu;
