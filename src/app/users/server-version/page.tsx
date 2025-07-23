import { User } from "@/types";
import { revalidateTag } from "next/cache";

// by default - server component
const UsersServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    headers: { "Api-Key": "token111" },
    // cache: "force-cache",
    // cache: "no-store",
    // next: { revalidate: 60 },
    next: { tags: ["users"] },
  });

  // кэширование с фетч - ТОЛЬКО на серверных компонентах

  // 1. cache: "force-cache" -кэширование по умолчанию:
  // при билде кэшировали данные и дальше они не обновляются
  // - статические страницы, которые не меняются (или крайне редко)

  // 2. cache: "no-store" - кэширование не используется: каждый раз запрос

  // 3. Revalidate вариант 
  // next:{revalidate: 60} - запросит обновление страницы каждые 60 сек
  // для чего: новости, курсы валют, продукты

  // 4. ручное обновление
  // next: { tags: ["users"] },  - внутри фетча
  // чтобы вызвать обновление, можем вызвать revalidateTag
  // revalidateTag("users")

  // ключ в серверном компоненте не будет "слит", клиент его не видит
  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  const users = await res.json();
  // console.log(users);  // вызов на server-е
  return (
    <div>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};
export default UsersServerVersion;
