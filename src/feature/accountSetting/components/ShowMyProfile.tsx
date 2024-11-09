import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type ShowMyProfileProps = {
  className?: string;
} & React.ComponentProps<"div">;

const ShowMyProfile: React.FC<ShowMyProfileProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("flex items-start md:items-center gap-2", className)} {...props}>
      <Checkbox
        id="showProfile"
        className="border-gray-300 border-2 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 flex items-center justify-center"
      />
      <label
        htmlFor="showProfile"
        className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Show my profile to serious employers on{" "}
        <Link
          href={"https://hirethesbest.io"}
          target="_blank"
          className="text-blue-500"
        >
          hirethesbest.io
        </Link>{" "}
        for free
      </label>
    </div>
  );
};

export default ShowMyProfile;
