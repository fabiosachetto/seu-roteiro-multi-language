"use client";
import { cn } from "@/helpers/cn";
import { NavbarNavProps } from "./types";

export const NavbarNav = ({ children, className, ...props }: NavbarNavProps) => {
  return (
    <nav className={cn("top-0 sm:top-0 bg-blue-500 text-white md:flex md:justify-between md:items-center fixed w-full z-50", className)} {...props}>
      {children}
    </nav>
  );
};