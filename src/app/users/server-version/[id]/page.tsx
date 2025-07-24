import UserCard from "@/components/UserCard/UserCard";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <UserCard id={id} />;
}
