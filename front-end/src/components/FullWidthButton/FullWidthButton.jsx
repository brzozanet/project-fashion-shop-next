import css from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick, disabled, ...props }) {
  return (
    <>
      <button
        className={`${css.fullWidthButton} ${disabled ? css.disabled : ""}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
