"use client";
import { InstagramIcon, WhatsappIcon } from "@/components/Icons/Icons";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavbarDevice } from "./NavbarDevice";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarNav } from "./NavbarNav";
import { NavbarListProps } from "./types";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (isOpen: unknown) => {
    setIsOpen(!isOpen);
  };

  const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
    return (
      <div className={cn(isOpen ? "flex absolute top-24 bg-blue-500 w-full p-4 left-0 gap-4 flex-col" : "hidden md:flex", className)} {...props}>
        {children}
      </div>
    );
  };

  return (
    <NavbarNav>
      <div className="container mx-auto flex justify-between items-center py-2 px-2 sm:px-0 lg:px-0 xl:px-24 2xl:px-52">
        <Link href="/" onClick={toggleMenu}>
          <div className="ml-3 float-left">
            <Image
              src="/assets/images/logo-roteiro.png"
              alt="Seu Roteiro em Paraty!"
              title="Seu Roteiro em Paraty!"
              width={100}
              height={84}
            />
          </div>
        </Link>

        <NavbarList>
          <NavbarListItemLink href="/" onClick={toggleMenu}>
            Home
          </NavbarListItemLink>
          <NavbarListItemLink href="/escunas" onClick={toggleMenu}>
            Escunas
          </NavbarListItemLink>
          <NavbarListItemLink href="/jeep" onClick={toggleMenu}>
            Jeep
          </NavbarListItemLink>
          <NavbarListItemLink href="/privativos" onClick={toggleMenu}>
            Privativos
          </NavbarListItemLink>
          <NavbarListItemLink
            href="/quemsomos"
            className={"sm:pt-0 lg:pt-2"}
            onClick={toggleMenu}>
            Quem Somos Nós
          </NavbarListItemLink>
          <NavbarListItemLink
            href="https://api.whatsapp.com/send?phone=5524992779411&text=Vim%20do%20Site%20e%20cliquei%20em%20Contate-nos!"
            target="_blank"
            className={"sm:pt-0 lg:pt-2"}
            onClick={toggleMenu}>
            <WhatsappIcon className={"inline-block -mt-[3px] mr-2 w-5 h-5"} />
            Contate-nos!
          </NavbarListItemLink>
          <NavbarListItemLink
            href="https://instagram.com/seuroteiroemparaty"
            target="_blank"
            className={"sm:pt-0 lg:pt-2"}
            onClick={toggleMenu}>
            <InstagramIcon className={"inline-block -mt-[4px] mr-2 w-5 h-5"} />
            Siga-nos no Instagram!
          </NavbarListItemLink>
        </NavbarList>

        <LocaleSwitcher />

        <NavbarDevice>
          <div className="md:hidden flex items-center mr-2">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              <svg
                height="24"
                id="Layer_1"
                viewBox="0 0 512 512"
                width="24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                {isOpen ? (
                  <path
                    fill="#ffffff"
                    d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"
                  />
                ) : (
                  <g fill="#ffffff">
                    <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,238.3,434.3,224,417.4,224z" />
                    <path d="M417.4,96H94.6C77.7,96,64,110.3,64,128c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,110.3,434.3,96,417.4,96z" />
                    <path d="M417.4,352H94.6C77.7,352,64,366.3,64,384c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,366.3,434.3,352,417.4,352z" />
                  </g>
                )}
              </svg>
            </button>
          </div>
        </NavbarDevice>
      </div>
    </NavbarNav>
  );
};