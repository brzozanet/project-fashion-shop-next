export const actionDeleteFromFavourites = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  return fetch(`${BACKEND_URL}/favourites/${params.id}`, {
    method: "DELETE",
  });
};
