import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FooterProps = {
  className?: string;
} & React.ComponentProps<"div">;

const LINKS = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "FAQ", href: "#" },
  {
    label: "Contact us",
    href: "#",
  },
];
const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <div className={cn("font-medium", className)} {...props}>
      <p>
        <Link href="#" className="text-blue-500">
          {" "}
          Get in touch with our support team
        </Link>{" "}
        if you have any question or want to leave some feedback.
      </p>
      <p>We’ll be happy to hear from you.</p>
      <div className="border-t my-4"></div>
      <div className="flex gap-8 font-light text-textGray">
        {LINKS.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
