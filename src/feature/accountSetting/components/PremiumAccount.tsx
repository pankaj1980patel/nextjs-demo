import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PremiumAccountProps = {
  className?: string;
} & React.ComponentProps<"div">;

const PremiumAccount: React.FC<PremiumAccountProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex gap-4 items-center p-6 rounded-md bg-success text-white",
        className
      )}
      {...props}
    >
      <div>
        <div className="bg-white w-[72px] h-[72px] flex justify-center items-center rounded-full">
          <Image
            src={"/career.svg"}
            alt="logo"
            className="w-[42px] h-[42px]"
            width={42}
            height={42}
          />
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold">Premium Account</p>
        <p className="font-medium">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};

export default PremiumAccount;
