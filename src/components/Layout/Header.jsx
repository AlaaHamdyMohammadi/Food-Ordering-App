'use client';
import {useSession} from "next-auth/react";
import Link from "next/link";

function Header() {
  const session = useSession();
    return (
      <header className="flex items-center justify-between mb-16">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      <Link href="/" className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex gap-4 items-center text-gray-500 font-semibold">
          <Link
            href={"/login"}
            
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="bg-primary text-white px-8 py-2 rounded-full"
          >
            Register
          </Link>
        </nav>
      </header>
    );
}

export default Header
