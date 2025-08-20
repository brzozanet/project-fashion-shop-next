import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CartContext } from "../../contexts/CartContext";
import { SHIPPING_COST, SHIPPING_FREE } from "../../constants/costs";
import ICON_SHIPPING from "../../assets/icon_shipping.svg";
import css from "./CartSummary.module.css";

export function CartSummary() {
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart] = useContext(CartContext);

  const productValue = shoppingCart.reduce(
    (sum, product) => sum + product[`price${currency}`],
    0
  );

  let shippingCost;
  if (productValue > SHIPPING_FREE[currency]) {
    shippingCost = 0;
  } else {
    shippingCost = SHIPPING_COST[currency];
  }

  let deliveryCostCalculation;

  if (productValue > SHIPPING_FREE[currency]) {
    deliveryCostCalculation = 0;
  } else {
    deliveryCostCalculation = SHIPPING_COST[currency];
  }

  const toBePaid = productValue + shippingCost;

  return (
    <>
      <div>
        <div className={css.cartSummary}>
          <h2 className={css.cartSummaryTitle}>Podsumowanie</h2>
          <div className={css.cartSummaryRow}>
            <p>Wartość produktów:</p>
            <p>
              {productValue} {currency}
            </p>
          </div>
          <div className={css.cartSummaryRow}>
            <p>Koszt dostawy:</p>
            <p>
              {productValue ? deliveryCostCalculation : 0} {currency}
            </p>
          </div>
          <div className={css.cartSummaryRow}>
            <p>
              <strong>Do zapłaty:</strong>
            </p>
            <p>
              <strong>
                {productValue ? toBePaid : 0} {currency}
              </strong>
            </p>
          </div>
          <FullWidthButton disabled={true}>Idź do kasy</FullWidthButton>
        </div>
        <div className={css.freeShipping}>
          <img
            src={ICON_SHIPPING}
            width="20"
            height="20"
            className={css.freeShippingIcon}
          />
          <p>
            <strong>
              Darmowa dostawa od {SHIPPING_FREE[currency]} {currency}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
