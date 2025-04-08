"use client";
import { cn } from "@/helpers/cn";
import { NavbarListItemProps } from "./types";

export const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
  return (
    <span className={cn("mx-1 sm:self-center sm:text-center lg:text-center transition delay-150 duration-300 ease-in-out font-bold pt-1 pb-1 px-4 sm:pt-1 xl:pt-1 2xl:pt-1 rounded-full cursor-pointer hover:bg-[#0CC0DF]", className)} {...props} >
      {/* <span className={cn("mx-1 transition delay-150 duration-300 ease-in-out font-bold py-1 px-4 rounded-full cursor-pointer hover:bg-[#0CC0DF]", className)} {...props} 
      onClick={toggleMenu}> */}
      {children}
    </span>
  );
};