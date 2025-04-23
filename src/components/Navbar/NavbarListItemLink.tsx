import { cn } from "@/helpers/cn";
import Link from "next/link";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemLinkProps } from "./types";
// import { routing } from "@/i18n/routing";

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn("", className)}>
      <Link href={href} className="block" {...props}>
        {children}
      </Link>
    </NavbarListItem>
  );
};