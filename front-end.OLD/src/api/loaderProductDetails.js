export const loaderProductDetails = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  return fetch(`${BACKEND_URL}/products/${params.id}`);
};
