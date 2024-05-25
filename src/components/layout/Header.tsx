/* eslint-disable @next/next/no-img-element */
"use client";
// import { CartIcon } from "@/icons/CartIcon";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";
// import { ChevronDownIcon } from "@/icons/ChevronDownIcon";
// import { UserIcon } from "@/icons/UserIcon";
// import { TagIcon } from "@/icons/TagIcon";
// import { UsersIcon } from "@/icons/UsersIcon";
// import { ShoppingBagIcon } from "@/icons/ShoppingBagIcon";
// import { MenuIcon } from "@/icons/MenuIcon";
// import { SignOutIcon } from "@/icons/SignOutIcon";
import { usePathname } from "next/navigation";
// import { CartContext } from "../../util/ContextProvider";
// import { useProfile } from "../hooks/useProfile";

const Header = () => {
  // const { data: session } = useSession();
  // const { cartProducts } = useContext(CartContext);
  const pathname = usePathname();
  // const { data: profileData } = useProfile();

  return (
    <Navbar
      className="font-semibold bg-dark py-3"
      classNames={{ item: "data-[active=true]:text-primary" }}
    >
      <NavbarBrand>
        <img
          src="/assets/Dosa-Blendz.png"
          alt="logo"
          style={{ height: "100px" }}
        ></img>
        <Link href="/" className="text-primary text-2xl font-josefin">
          Dosa Blendz
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-8" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            href="/"
            aria-current="page"
            className="text-white hover:text-primary"
          >
            Home
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive={pathname === "/menu"}>
          <Link href="/menu" className="hover:text-primary">
            Menu
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive={pathname === "/services"}>
          <Link href="/services" className="text-white hover:text-primary">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link href="/about" className="text-white hover:text-primary">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <Link href="/contact" className="text-white hover:text-primary">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
