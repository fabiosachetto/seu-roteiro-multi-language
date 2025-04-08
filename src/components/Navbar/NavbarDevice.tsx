"use client";
import { cn } from "@/helpers/cn";
import { NavbarDeviceProps } from "./types";

export const NavbarDevice = ({ children, className, ...props }: NavbarDeviceProps) => {
  return (
    <div className={cn("md:hidden flex items-center mr-2", className)} {...props}>
      {children}
    </div>
  );
};