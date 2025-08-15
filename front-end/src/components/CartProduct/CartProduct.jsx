import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CartContext } from "../../contexts/CartContext";
import ICON_DELETE from "../../assets/icon_delete.svg";
import css from "./CartProduct.module.css";

export function CartProduct({ id, brand, name, image, description, price }) {
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart, setShoppingCart] = useContext(CartContext);

  const truncateTextSmart = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    return lastSpace === -1
      ? truncated + "..."
      : truncated.slice(0, lastSpace) + "...";
  };

  const handleDeleteFromCartButton = (id) => {
    const filteredShoppingCart = shoppingCart.filter(
      (product) => product.id !== id
    );
    setShoppingCart(filteredShoppingCart);
  };

  return (
    <>
      <div className={css.cartProduct}>
        <div className={css.cartProductBox}>
          <div className={css.cartProductPhoto}>
            <img
              src={image}
              alt={name}
              title={name}
              className={css.cartProductPhotoImg}
            />
          </div>
        </div>
        <div className={css.cartProductBox}>
          <div className={css.cartProductSubBox}>
            <div className={css.cartProductSubBoxText}>
              <h3 className={css.cartProductTitle}>
                {brand} | {name}
              </h3>
              <p>{truncateTextSmart(description, 100)}</p>
            </div>
            <button
              className={css.cartButtonAction}
              onClick={() => handleDeleteFromCartButton(id)}
            >
              <img src={ICON_DELETE} width="14" height="14" />
              <span className={css.cartProductIconText}>Usuń z koszyka</span>
            </button>
          </div>
        </div>
        <div className={css.cartProductBox}>
          <p className={css.cartProductPrice}>
            {price} {currency}
          </p>
        </div>
      </div>
    </>
  );
}
