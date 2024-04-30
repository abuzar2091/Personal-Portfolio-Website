"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div 
      className={cn(
        "fixed  top-10 inset-x-0 max-w-2xl mx-auto z-50  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#home"} className="hover:opacity-50">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
       
        <Link href={"#about-me"} className="hover:opacity-50">
          <MenuItem setActive={setActive} active={active} item="About me">
          </MenuItem>
        </Link>
        <Link href={"#services"} className="hover:opacity-50">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          ></MenuItem>
        </Link>
        <Link href={"#contact-me"} className="hover:opacity-50">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;

