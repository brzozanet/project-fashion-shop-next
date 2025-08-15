import css from "./TopBar.module.css";

export function TopBar({ children }) {
  return (
    <>
      <div className={css.topBar}>{children}</div>
    </>
  );
}
