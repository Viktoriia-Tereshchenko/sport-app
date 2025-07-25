import { createCategory } from "@/app/actions/createCategory";

export default function CreateCategory() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <form
        action={createCategory}
        className="flex flex-col justify-center items-center gap-6 rounded-xl p-8 bg-secondary shadow-md  w-[500px] dark:text-background"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border:border rounded p-2 w-100 bg-background text-foreground"
        />
        <input
          type="text"
          name="image"
          placeholder="Image url"
          className="border:border rounded p-2 w-100 bg-background text-foreground"
        />
        <button
          type="submit"
          className="border rounded cursor-pointer w-50 p-1 shadow-md bg-primary"
        >
          Save
        </button>
      </form>
    </div>
  );
}
