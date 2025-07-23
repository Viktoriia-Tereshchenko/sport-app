import Link from "next/link";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-start gap-8">
        <Link
          href={"/settings/user"}
          className="hover:text-amber-600 hover:underline"
        >
          User setting
        </Link>
        <Link
          href={"/settings/organization"}
          className="hover:text-amber-500 hover:underline"
        >
          Organization setting
        </Link>
      </nav>
      {children}
    </>
  );
}
