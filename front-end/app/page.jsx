import { Hero } from "./components/Hero/Hero";

export default async function Home() {
  const BACKEND_URL = process.env.BACKEND_URL;
  let genderProducts;

  try {
    const gender = "women";
    const response = await fetch(`${BACKEND_URL}/${gender}`);

    if (!response.ok) {
      throw new Error(`Błąd HTTP, ${response.status}`);
    }

    genderProducts = await response.json();
  } catch (error) {
    console.error("Błąd pobierania danych", error);
    return <div>Błąd pobierania danych</div>;
  }

  return (
    <>
      <Hero imageUrl={genderProducts.heroImageUrl} />
    </>
  );
}
