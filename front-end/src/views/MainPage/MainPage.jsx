import { useLoaderData } from "react-router-dom";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Hero } from "../../components/Hero/Hero";

export function MainPage() {
  const [genderProducts, favouriteProducts] = useLoaderData();

  return (
    <>
      <Hero imageUrl={genderProducts.heroImageUrl} />
      <Bestsellers
        bestsellersData={genderProducts.bestsellers}
        favouritesData={favouriteProducts}
      />
    </>
  );
}
