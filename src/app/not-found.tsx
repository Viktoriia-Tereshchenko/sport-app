"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center flex-col p-6">
      <h2 className="font-bold text-3xl">Page not found!</h2>
      <Link href={"/"} className="underline mt-8">
        Back to home
      </Link>
    </div>
  );
}
