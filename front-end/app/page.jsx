import { Hero } from "./components/Hero/Hero";

export default async function Home() {
  const BACKEND_URL = process.env.BACKEND_URL;

  try {
    const gender = "women";
    const genderProducts = await fetch(`${BACKEND_URL}/${gender}`);
    const response = await genderProducts.json();
    return response;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Hero imageUrl={response.heroImageUrl} />
    </>
  );
}
