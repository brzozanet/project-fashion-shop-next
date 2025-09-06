"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useContext } from "react";
import css from "./Product.module.css";

export function Product({
  id,
  name,
  price,
  photo,
  category,
  subcategory,
  isProductInFavourites,
}) {
  const params = useParams();
  const fetcher = useFetcher();
  const [currency] = useContext(CurrencyContext);

  return (
    <div className={css.product}>
      <div className={css.productPhotoContainer}>
        <Link to={`/${params.gender}/${category}/${subcategory}/${id}`}>
          <img
            src={photo}
            alt={name}
            title={name}
            className={css.productPhotoImg}
          />
        </Link>
        <fetcher.Form
          method="POST"
          action={`/dodaj-do-ulubionych/${id}`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="submit"
            className={
              isProductInFavourites ? css.heartIconDisabled : css.heartIcon
            }
            disabled={fetcher.state === "submitting" || isProductInFavourites}
          />
        </fetcher.Form>
      </div>
      <Link to={`/${params.gender}/${category}/${subcategory}/${id}`}>
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.productPrice}>
          {price} {currency}
        </p>
      </Link>
    </div>
  );
}
