import { useLoaderData } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export function Favourites() {
  const data = useLoaderData();
  const [userFavouritesProducts] = data;

  return (
    <>
      <CenteredContent>
        {userFavouritesProducts.length ? (
          <>
            <PageTitle>
              Ulubione {`(${userFavouritesProducts.length})`}
            </PageTitle>
            <FavouritesList data={data} />
          </>
        ) : (
          <PageTitle>Nie masz żadnych ulubionych produktów</PageTitle>
        )}
      </CenteredContent>
    </>
  );
}
