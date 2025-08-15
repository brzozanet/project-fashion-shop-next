import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { Layout } from "./components/Layout/Layout";
import { NotFound } from "./views/NotFound/NotFound";
import { MainPage } from "./views/MainPage/MainPage";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { loaderMainPage } from "./api/loaderMainPage";
import { loaderProductsList } from "./api/loaderProductsList";
import { loaderProductDetails } from "./api/loaderProductDetails";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { loaderFavourites } from "./api/loaderFavourites";
import { actionAddToFavourites } from "./api/actionAddToFavourites";
import { actionDeleteFromFavourites } from "./api/actionDeleteFromFavourites";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    errorElement: <NotFound />,
    children: [
      {
        path: "/dodaj-do-ulubionych/:id",
        action: actionAddToFavourites,
      },
      {
        path: "/usun-z-ulubionych/:id",
        action: actionDeleteFromFavourites,
      },
      {
        element: <MainPage />,
        path: "/:gender?",
        loader: loaderMainPage,
      },
      {
        element: <ProductsList />,
        path: ":gender/:category/:subcategory?",
        loader: loaderProductsList,
      },
      {
        element: <ProductDetails />,
        path: ":gender/:category/:subcategory/:id",
        loader: loaderProductDetails,
      },
      {
        element: <Favourites />,
        path: "/ulubione",
        loader: loaderFavourites,
      },
      {
        element: <Cart />,
        path: "/koszyk",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
