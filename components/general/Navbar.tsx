import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
// import { useRouter } from "next/router";

const navLinkData = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Dashborad", link: "/dashboard" },
];

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // const router = useRouter();
  return (
    <div className="relative w-full">
      <div className="backdrop-blur-xl w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href={"/"}>
                <h1 className="text-3xl font-bold">
                  Blog
                  <span className="text-blue-500">
                    {user?.given_name ? user?.given_name : "Loom"}
                  </span>
                </h1>
              </Link>

              <div className="hidden sm:flex items-center gap-6">
                {navLinkData?.map((linkItem) => (
                  <Link
                    href={linkItem.link}
                    className={`text-sm font-medium hover:text-blue-600 transition-colors`}
                    key={linkItem.id}
                  >
                    {linkItem.label}
                  </Link>
                ))}
              </div>
            </div>

            {user ? (
              <div className="flex items-center gap-5">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={
                      user.picture ||
                      "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    }
                    alt={user.given_name as string}
                    fill
                    className="object-fill"
                  />
                </div>
                <p className="text-base font-semibold text-gray-600">
                  {user.given_name}
                </p>
                <Button variant={"secondary"} className="cursor-pointer">
                  <ArrowLeft />
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
