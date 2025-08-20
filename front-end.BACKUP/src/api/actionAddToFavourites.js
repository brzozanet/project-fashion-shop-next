export const actionAddToFavourites = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  return fetch(`${BACKEND_URL}/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: Number(params.id),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
