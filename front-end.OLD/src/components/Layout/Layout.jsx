import { Outlet } from "react-router-dom";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CartContext } from "../../contexts/CartContext";
import { useCurrency } from "../../hooks/useCurrency";
import { useCart } from "../../hooks/useCart";

export function Layout() {
  const [currency, setCurrency] = useCurrency();
  const [shoppingCart, setShoppingCart] = useCart();

  return (
    <>
      <CurrencyContext value={[currency, setCurrency]}>
        <CartContext value={[shoppingCart, setShoppingCart]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoriesMenu />
            <Outlet />
          </MainContent>
        </CartContext>
      </CurrencyContext>
      <Footer />
    </>
  );
}
