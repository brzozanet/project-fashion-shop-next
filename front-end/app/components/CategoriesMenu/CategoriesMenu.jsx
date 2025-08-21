import Link from "next/link";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./CategoriesMenu.module.css";

export function CategoriesMenu() {
  // FIXME: params in Next
  const params = useParams();

  return (
    <>
      <div className={css.categoriesMenu}>
        <ul className={css.categoryList}>
          {CATEGORIES.map((category) => {
            return (
              <li className={css.categoryItem} key={nanoid()}>
                <Link href={`${params.gender}/${category.path}`}>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
