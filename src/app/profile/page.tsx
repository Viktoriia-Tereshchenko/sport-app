import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
  // пример использования сессии в серверном компоненте
  const session = await getServerSession(authOptions);
  return (
    <section className="bg-secondary py-20 px-14 md:px-32 flex justify-center ">
      <div className="bg-background  w-64 p-8 flex flex-col items-center gap-6 rounded-2xl border-border">
        <h2>User profile</h2>
        {/* <p>{session?.user?.email}</p> */}
        <Image
          src={session?.user?.image || ""}
          alt="avatar"
          unoptimized
          width={200}
          height={200}
          className="rounded-2xl"
        />
        <p className="bg-secondary w-34 sm:w-28 md:w-50 lg:w-60 text-center break-words">
          {session?.user?.email}
        </p>
      </div>
    </section>
  );
}
