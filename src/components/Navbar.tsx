"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Login", route: "/login" },
    { name: "Register", route: "/register" },
    { name: "Event", route: "/events" },
  ];
  return (
    <div className='bg-slate-500 fixed z-50 flex w-full'>
      <ul className=' mx-auto flex bg-slate-600 text-center justify-around min-w-[1240px] p-4'>
        {links.map((link) => {
          const isActive = pathname === link.route;
          return (
            <li key={link.name} className='p-4'>
              <Link
                className={
                  isActive
                    ? "bg-blue-900 cursor-pointer text-white p-4 rounded-2xl "
                    : "bg-slate-900 cursor-pointer text-white rounded-2xl p-4"
                }
                href={link.route}
              >
                {link.name}
              </Link>{" "}
            </li>
          );
        })}
        <div className=' w-8 h-8 p-4'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in'>Login</Link>
          </SignedOut>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
