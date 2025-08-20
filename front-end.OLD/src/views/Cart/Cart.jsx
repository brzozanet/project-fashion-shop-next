import { useContext } from "react";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const [shoppingCart] = useContext(CartContext);

  return (
    <>
      <CenteredContent>
        {shoppingCart.length ? (
          <PageTitle>Koszyk {`(${shoppingCart.length})`}</PageTitle>
        ) : (
          <PageTitle>Twój koszyk jest pusty</PageTitle>
        )}

        <FlexContainer>
          <CartProductsList />
          <CartSummary />
        </FlexContainer>
      </CenteredContent>
    </>
  );
}
