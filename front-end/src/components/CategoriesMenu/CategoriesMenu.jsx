import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./CategoriesMenu.module.css";

export function CategoriesMenu() {
  const params = useParams();

  return (
    <>
      <div className={css.categoriesMenu}>
        <ul className={css.categoryList}>
          {CATEGORIES.map((category) => {
            return (
              <li className={css.categoryItem} key={nanoid()}>
                <NavLink to={`${params.gender}/${category.path}`}>
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
