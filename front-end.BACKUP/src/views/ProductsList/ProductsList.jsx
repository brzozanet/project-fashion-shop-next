import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData } from "react-router-dom";

export function ProductsList() {
  const [products, favourites] = useLoaderData();

  return (
    <>
      <CenteredContent>
        <FlexContainer>
          <ExpandableMenu />
          <div>
            <Breadcrumbs id={products.id} name={products.name} />
            <Products products={products} favourites={favourites} />
            <Pagination />
          </div>
        </FlexContainer>
      </CenteredContent>
    </>
  );
}
