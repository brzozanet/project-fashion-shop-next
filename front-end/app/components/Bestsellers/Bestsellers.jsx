"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { PageTitle } from "../PageTitle/PageTitle";
import { Product } from "../Product/Product";
import css from "./Bestsellers.module.css";

export function Bestsellers({ bestsellersData, favouritesData }) {
  const [currency] = useContext(CurrencyContext);

  return (
    <>
      <div className={css.bestsellers}>
        <CenteredContent>
          <PageTitle>Sprawdź nasze bestellery</PageTitle>
          <div className={css.bestsellersList}>
            {bestsellersData.map((product) => {
              // Znajdź odpowiedni rekord z favourites dla tego produktu
              const favouriteRecord = favouritesData.find(
                (favourite) => favourite.productId === product.id
              );
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  // NOTE: dynamic access
                  price={`${product[`price${currency}`]}`}
                  photo={product.photos[0]}
                  gender={product.gender}
                  category={product.category}
                  subcategory={product.subcategory}
                  // NOTE: optional chaining
                  isProductInFavourites={favouriteRecord?.productId}
                  key={product.id}
                />
              );
            })}
          </div>
        </CenteredContent>
      </div>
    </>
  );
}
