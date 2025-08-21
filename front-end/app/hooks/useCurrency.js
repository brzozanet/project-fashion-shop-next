"use client";
import { useEffect, useState } from "react";
import { DEFAULT_CURRENCY } from "../constants/curriencies";

export const useCurrency = () => {
  // Inicjalizacja z localStorage
  const [currency, setCurrency] = useState(() => {
    try {
      const savedUserCurrency = localStorage.getItem("selectedCurrency");
      return savedUserCurrency || DEFAULT_CURRENCY;
    } catch (error) {
      console.error("Błąd podczas pobierania wybranej waluty z pamięci", error);
      return DEFAULT_CURRENCY;
    }
  });

  // Zapisywanie przy każdej zmianie
  useEffect(() => {
    try {
      localStorage.setItem("selectedCurrency", currency);
    } catch (error) {
      console.error("Błąd podczas zapisu wybranej waluty do pamięci", error);
    }
  }, [currency]);

  return [currency, setCurrency];
};
