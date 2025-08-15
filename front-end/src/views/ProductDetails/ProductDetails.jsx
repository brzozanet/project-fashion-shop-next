import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Photos } from "../../components/Photos/Photos";
import { Detail } from "../../components/Detail/Detail";
import { useLoaderData } from "react-router-dom";
import css from "./ProductDetails.module.css";

export function ProductDetails() {
  const product = useLoaderData();

  return (
    <>
      <CenteredContent>
        <FlexContainer>
          <ExpandableMenu />
          <div className={css.productDetailsWithBreadcrumbs}>
            <Breadcrumbs
              id={product.id}
              gender={product.gender}
              category={product.category}
              subcategory={product.subcategory}
              name={product.name}
            />
            <div className={css.productDetailContainer}>
              <Photos photos={product.photos} name={product.name} />
              <Detail product={product} />
            </div>
          </div>
        </FlexContainer>
      </CenteredContent>
    </>
  );
}
