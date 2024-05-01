
import paths from "@/paths";
import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

import Link from "next/link";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={paths.home()} className="font-bold">
          {"Discuss"}
        </Link>
      </NavbarBrand>
      <NavbarContent className="justify-center">
        <Input />
      </NavbarContent>
      <NavbarContent className="justify-end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
