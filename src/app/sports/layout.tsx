import Link from "next/link";

export default function SportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center gap-6 items-center min-h-12 sticky top-0 ">
        <Link href={"/sports/football"} className="hover:text-amber-300">
          Football
        </Link>
        <Link href={"/sports/swimming"} className="hover:text-amber-300">
          Swimming
        </Link>
        <Link href={"/sports/tennis"} className="hover:text-amber-300">
          Tennis
        </Link>
      </nav>
      {children}
    </>
  );
}
