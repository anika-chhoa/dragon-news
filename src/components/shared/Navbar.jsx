"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import avatarImg from "../../assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
//   console.log(user);
  return (
    <div className="container mx-auto flex justify-between my-8 items-center">
      <div></div>
      <ul className="flex gap-4">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-4 justify-center items-center">
        {isPending ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : user ? (
          <>
            <h2>Hello, {user?.name}</h2>
            <Image
              src={user?.image || avatarImg}
              alt="avatarImg"
              width={50}
              height={50}
              className="rounded-full"
            />
            <button
              onClick={async () => await authClient.signOut()}
              className="btn bg-black text-white font-bold"
            >
              Logout
            </button>
          </>
        ) : (
          <button>
            <Link href="/login" className="btn bg-black text-white font-bold">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
