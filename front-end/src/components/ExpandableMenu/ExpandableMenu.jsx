import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import { GENDERS_TEXT_MAPPING } from "../../constants/mappings";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const params = useParams();
  const activeGenderText = GENDERS_TEXT_MAPPING.get(params.gender);
  const activeCategory = params.category;

  return (
    <>
      <div className={css.expandableMenu}>
        <p className={css.genderTitle}>{activeGenderText}</p>
        <div>
          <ul>
            {CATEGORIES.map((category) => {
              return (
                <li key={nanoid()} className={css.categoriesItem}>
                  <NavLink
                    to={`/${params.gender}/${category.path}`}
                    className={css.categoriesLink}
                  >
                    {category.name}
                    <img
                      src={ICON_ARROW}
                      className={
                        activeCategory === category.path
                          ? css.categoriesIconActive
                          : ""
                      }
                    />
                  </NavLink>
                  {activeCategory === category.path ? (
                    <ul>
                      {category.subcategories.map((subcategory) => {
                        return (
                          <li key={nanoid()} className={css.subCategoriesItem}>
                            <NavLink
                              to={`/${params.gender}/${category.path}/${subcategory.path}`}
                              className={css.subCategoriesLink}
                            >
                              {subcategory.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
