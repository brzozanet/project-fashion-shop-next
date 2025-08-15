import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./Pagination.module.css";

export function Pagination() {
  const numberOfPagesMockup = 5;
  const pagination = Array(numberOfPagesMockup).fill(null);

  return (
    <>
      <ul className={css.pagination}>
        {pagination.map((page, index) => {
          return (
            <li key={nanoid()}>
              <NavLink to="" className={css.paginationLink}>
                {index + 1}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
