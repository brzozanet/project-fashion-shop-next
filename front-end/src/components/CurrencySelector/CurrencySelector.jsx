import { nanoid } from "nanoid";
import { CURRENCIES } from "../../constants/curriencies";
import css from "./CurrencySelector.module.css";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <select
        className={css.currencySelector}
        value={currency}
        onChange={handleCurrencyChange}
      >
        {CURRENCIES.map((currrency) => {
          return (
            <option value={currrency.name} key={nanoid()}>
              {currrency.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
