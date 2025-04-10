import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const navLinkData = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Dashborad", link: "/dashboard" },
];

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  //   console.log(user);
  return (
    <>
      <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold">
              Blog<span className="text-blue-500">Karan</span>
            </h1>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            {navLinkData?.map((linkItem) => (
              <Link
                href={linkItem.link}
                className="text-sm font-medium hover:text-blue-500 transition-colors"
                key={linkItem.id}
              >
                {linkItem.label}
              </Link>
            ))}
          </div>
        </div>

        {user ? (
          <div className="flex items-center gap-5">
            <p>{user.given_name}</p>
            {/* <img src={user.picture} alt="Profile" className="w-6 h-6" /> */}
            <Button variant={"secondary"}>
              <LogoutLink>Logout</LogoutLink>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button>
              <LoginLink>Login</LoginLink>
            </Button>
            <Button variant={"secondary"}>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
