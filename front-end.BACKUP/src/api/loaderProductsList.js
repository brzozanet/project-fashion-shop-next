import { redirect } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { GENDERS_MAPPING } from "../constants/mappings";

export const loaderProductsList = async ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const gender = GENDERS_MAPPING.get(params.gender);

  const searchParams = new URLSearchParams();

  searchParams.append("gender", gender);

  const foundCategory = CATEGORIES.find(
    (category) => category.path === params.category
  );

  if (foundCategory) {
    searchParams.append("category", params.category);

    const foundSubcategory = foundCategory.subcategories.find(
      (subcategory) => subcategory.path === params.subcategory
    );

    if (params.subcategory && !foundSubcategory) {
      return redirect(`/${params.gender}/${params.category}`);
    }

    if (foundSubcategory) {
      searchParams.append("subcategory", params.subcategory);
    }

    const [products, favourites] = await Promise.all([
      (
        await fetch(`${BACKEND_URL}/products?${searchParams.toString()}`)
      ).json(),
      (await fetch(`${BACKEND_URL}/favourites`)).json(),
    ]);

    return [products, favourites];
  }
  return redirect(`/${params.gender}`);
};
