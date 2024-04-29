import { auth, User } from "@/auth";
import paths from "@/paths";
import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Link from "next/link";

const AuthContent = ({ user }: { user?: User }): JSX.Element => {
  if (user) {
    return <Avatar src={user?.image ?? ""} />;
  } else {
    return (
      <>
        <NavbarItem>
          <Button type="submit" color="secondary" variant="bordered">
            {"Sign In"}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            {"Sign Up"}
          </Button>
        </NavbarItem>
      </>
    );
  }
};

export default async function Header() {
  const session = await auth();

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
        <AuthContent user={session?.user} />
      </NavbarContent>
    </Navbar>
  );
}
