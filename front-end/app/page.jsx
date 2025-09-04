import { Hero } from "./components/Hero/Hero";

export default async function Home() {
  const BACKEND_URL = process.env.BACKEND_URL;
  console.log(BACKEND_URL);

  try {
    const gender = "kobieta";
    const genderProducts = await fetch(`${BACKEND_URL}/${gender}`);
    console.log(genderProducts);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Hero imageUrl={genderProducts.heroImageUrl} />
    </>
  );
}
