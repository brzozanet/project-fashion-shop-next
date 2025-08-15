import { useContext } from "react";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { CartContext } from "../../contexts/CartContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useParams } from "react-router-dom";
import css from "./Detail.module.css";

export function Detail({ product }) {
  const params = useParams();
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart, setShoppingCart] = useContext(CartContext);

  const productAlreadyAddedToCart = shoppingCart.find(
    (product) => product.id === Number(params.id)
  );

  const handleAddToCartButton = () => {
    setShoppingCart((prevstate) => [...prevstate, product]);
  };

  return (
    <>
      <div className={css.detail}>
        <h3 className={css.detailBrand}>{product.brand}</h3>
        <p className={css.detailName}>{product.name}</p>
        <p className={css.detailPrice}>
          {product[`price${currency}`]} {currency}
        </p>
        <div className={css.detailBtnWrapper}>
          {!productAlreadyAddedToCart ? (
            <FullWidthButton onClick={handleAddToCartButton}>
              Dodaj do koszyka
            </FullWidthButton>
          ) : (
            <FullWidthButton disabled={true}>
              Produkt jest już w koszyku
            </FullWidthButton>
          )}
        </div>
        <p className={css.detailShipping}>Dostawa do 24h</p>
        <p className={css.detailReturn}>Zwrot do 30 dni</p>
        <Accordion
          description={product.description}
          maintenanceInfo={product.maintenanceInfo}
        />
      </div>
    </>
  );
}
