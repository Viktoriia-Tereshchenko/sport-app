import Link from "next/link";
import React from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggles";
import AuthButton from "../AuthButton/AuthButton";
import { getServerSession } from "next-auth";

export default async function NavBar() {
  const session = await getServerSession();

  return (
    <nav className="flex justify-center gap-6 items-center min-h-12 top-0 flex-wrap">
      <Link href={"/"} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-amber-300">
        About
      </Link>
      <Link href={"/settings"} className="hover:text-amber-300">
        Settings
      </Link>
      <Link href={"/sports"} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={"/users/client-version"} className="hover:text-amber-300">
        Users client
      </Link>
      <Link href={"/users/server-version"} className="hover:text-amber-300">
        Users server
      </Link>
      <Link href={"/products/client-version"} className="hover:text-amber-300">
        Products client
      </Link>
      <Link href={"/products/server-version"} className="hover:text-amber-300">
        Products server
      </Link>
      {session && (
        <Link href={"/products/create"} className="hover:text-amber-300">
          Create product
        </Link>
      )}
      <Link href={"/categories"} className="hover:text-amber-300">
        Categories
      </Link>
      {session && (
        <Link href={"/categories/create"} className="hover:text-amber-300">
          Create category
        </Link>
      )}
      {session && (
        <Link href={"/profile"} className="hover:text-amber-300">
          Profile
        </Link>
      )}
      <AuthButton />
      <ThemeToggler />
    </nav>
  );
}
