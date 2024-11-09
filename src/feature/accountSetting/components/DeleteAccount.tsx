import React from "react";
import { cn } from "@/lib/utils";

type DeleteAccountProps = {
  className?: string;
} & React.ComponentProps<"div">;

const DeleteAccount: React.FC<DeleteAccountProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("p-4 border border-grayB rounded-md", className)}
      {...props}
    >
      <p className="text-lg font-medium">Delete Account</p>
      <p className="text-textGray font-medium">
        If you delete your account you’ll be permanently removing it from our
        systems - you can’t undo it.
      </p>
      <button className="text-red-500 font-semibold mt-4 hover:text-red-600">
        Yes, Delete my account
      </button>
    </div>
  );
};

export default DeleteAccount;
