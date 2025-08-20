import { redirect } from "react-router-dom";
import { GENDERS_MAPPING } from "../constants/mappings";

export const loaderMainPage = async ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const gender = GENDERS_MAPPING.get(params.gender);

  if (gender) {
    const [genderProducts, favouriteProducts] = await Promise.all([
      (await fetch(`${BACKEND_URL}/${gender}`)).json(),
      (await fetch(`${BACKEND_URL}/favourites`)).json(),
    ]);

    return [genderProducts, favouriteProducts];
  }

  // if (gender) {
  //   return fetch(`${BACKEND_URL}/${gender}`);
  // }

  return redirect("/kobieta");
};
