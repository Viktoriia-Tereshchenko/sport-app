export default function Swimming() {
  return (
    <section className="px-32 py-20">
      <h2 className="font-bold text-4xl p-4 m-4">Курс по плаванию</h2>
      <h3 className="font-bold text-2xl p-4 m-4">Введение в плавание:</h3>
      <ul className="px-6 mx-4 py-1 my-1 flex flex-wrap gap-2">
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          кроль
        </li>
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          брасс
        </li>
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          дыхание
        </li>
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          техника
        </li>
      </ul>
      <p className="p-4 m-4">Подходит для разных возрастов и уровней</p>
    </section>
  );
}
