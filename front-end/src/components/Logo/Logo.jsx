import css from "./Logo.module.css";
import LOGO_SHOP from "../../assets/logo_fashion_shop.png";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <>
      <div className={css.logo}>
        <Link to="/">
          <img src={LOGO_SHOP} height="55" alt="" title="" />
        </Link>
      </div>
      {/* <h1 className={css.logoText}>React Shop Online®</h1> */}
    </>
  );
}
