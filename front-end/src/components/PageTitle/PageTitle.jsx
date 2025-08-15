import css from "./PageTitle.module.css";

export function PageTitle({ children }) {
  return (
    <>
      <h2 className={css.pageTitle}>{children}</h2>
    </>
  );
}
