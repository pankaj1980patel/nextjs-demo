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
    <div className={cn("", className)} {...props}>
      <p>
        Get in touch with our support team if you have any question or want to
        leave some feedback.
      </p>
      <p>We’ll be happy to hear from you.</p>
      <div className="border-t my-4"></div>
      <div className="flex gap-8">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-textGray font-light"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
