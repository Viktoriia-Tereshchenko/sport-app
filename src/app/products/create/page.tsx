import createProduct from "@/app/actions/createProduct";
import getCategories from "@/app/actions/getCategories";
import { Category } from "@/types";

export default async function CreateProduct() {
  const categories: Category[] = await getCategories();

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <form
        action={createProduct}
        className="flex flex-col justify-center items-center gap-6 rounded-xl p-8 bg-secondary shadow-md  w-[470px] dark:text-background"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border: border rounded p-2 w-100 bg-background text-foreground"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="border: border rounded p-2 w-100 bg-background text-foreground"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border: border rounded p-2 w-100 bg-background text-foreground"
        />
        <select
          name="categoryId"
          id="selectedCategory"
          className="border: border rounded p-2 w-100 bg-background text-foreground"
        >
          <option value="">Choose a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="image"
          placeholder="Image url"
          className="border: border rounded p-2 w-100 bg-background text-foreground"
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
