"use client";
import { useEffect, useState } from "react";

export const useCart = () => {
  // Inicjalizacja z localStorage
  const [shoppingCart, setShoppingCart] = useState(() => {
    try {
      const savedShoppingCart = localStorage.getItem("shoppingCart");
      return savedShoppingCart ? JSON.parse(savedShoppingCart) : [];
    } catch (error) {
      console.error("Błąd podczas pobierania koszyka", error);
      return [];
    }
  });

  // Zapisywanie przy każdej zmianie
  useEffect(() => {
    try {
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    } catch (error) {
      console.error("Błąd podczas zapisywania koszyka", error);
    }
  }, [shoppingCart]);

  return [shoppingCart, setShoppingCart];
};
