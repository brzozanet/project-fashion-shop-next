import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ICON_HEART from "../../assets/icon_heart.svg";
import ICON_BAG from "../../assets/icon_cart.svg";
import css from "./IconMenu.module.css";

export function IconMenu() {
  const [shoppingCart] = useContext(CartContext);

  return (
    <>
      <ul className={css.iconMenuList}>
        <li className={css.iconMenuItem}>
          <Link to="/ulubione">
            <img src={ICON_HEART} alt="Ulubione" title="Ulubione"></img>
          </Link>
        </li>
        <li className={css.iconMenuItem}>
          <Link to="/koszyk">
            <img src={ICON_BAG} alt="Koszyk" title="Koszyk" />
            <div className={css.iconCounter}>{shoppingCart.length}</div>
          </Link>
        </li>
      </ul>
    </>
  );
}
