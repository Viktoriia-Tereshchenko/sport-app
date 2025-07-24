import Image from "next/image";

interface UserCardProps {
  id: string;
}
export default async function UserCard({ id }: UserCardProps) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to load user (id - ${id})`);
  }
  const user = await res.json();

  return (
    <div className="bg-gray-200 rounded-xl mt-20 mx-auto p-4 shadow-md  border border-gray-100 overflow-hidden w-[300px] h-[400px] flex flex-col items-center dark:text-background">
      <h3 className="font-bold text-xl p-4">{user.name}</h3>
      <div className="relative mb-4 overflow-hidden rounded-lg flex-shrink-0 w-[250px] h-[250px]">
        <Image
          src={user.avatar}
          alt={"avatar"}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <p>{user.role}</p>
    </div>
  );
}
