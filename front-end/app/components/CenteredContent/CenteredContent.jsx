import css from "./CenteredContent.module.css";

export function CenteredContent({ children }) {
  return (
    <>
      <div className={css.centeredContent}>{children}</div>
    </>
  );
}
