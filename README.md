## Plan przepisania aplikacji React na Next.js

### Faza 1: Przygotowanie środowiska

1. **Utworzenie kopii zapasowej**

   - Zmień nazwę obecnego folderu `front-end` na `front-end.OLD`
   - Utwórz nowy folder `front-end`

2. **Inicjalizacja projektu Next.js**

   - W nowym folderze `front-end` uruchom `npx create-next-app@latest .`
   - Wybierz opcje: JavaScript (bez TypeScript), CSS Modules, App Router
   - Zainstaluj zależności

3. **Konfiguracja Turbopack**
   - W `package.json` zmień skrypt dev na `"dev": "next dev --turbo"`

### Faza 2: Struktura folderów Next.js

1. **Utworzenie podstawowej struktury App Router**

   - `app/` - główny folder aplikacji
   - `app/layout.js` - główny layout
   - `app/page.js` - strona główna
   - `app/globals.css` - globalne style

2. **Utworzenie folderów dla stron**
   - `app/cart/page.js` - strona koszyka
   - `app/favourites/page.js` - strona ulubionych
   - `app/products/page.js` - lista produktów
   - `app/products/[id]/page.js` - szczegóły produktu

### Faza 3: Migracja komponentów

1. **Kopiowanie komponentów**

   - Skopiuj wszystkie komponenty z `front-end.OLD/src/components/` do `front-end/components/`
   - Skopiuj style CSS Modules

2. **Adaptacja komponentów**
   - Zmień importy z React Router na Next.js Link
   - Dostosuj routing do App Router
   - Zaktualizuj ścieżki do obrazów (przenieś do `public/`)

### Faza 4: Migracja kontekstów i hooków

1. **Kopiowanie logiki biznesowej**

   - Skopiuj `contexts/`, `hooks/`, `constants/` z `front-end.OLD/src/`
   - Dostosuj do Next.js (Client Components)

2. **Migracja API**
   - Skopiuj `api/` z `front-end.OLD/src/`
   - Dostosuj do Next.js Server Actions lub API Routes

### Faza 5: Routing i nawigacja

1. **Implementacja App Router**

   - Utwórz layouty dla każdej sekcji
   - Zaimplementuj dynamiczne routingi
   - Dostosuj nawigację

2. **Migracja Breadcrumbs**
   - Dostosuj do Next.js usePathname

### Faza 6: Stylowanie i assets

1. **Migracja stylów**

   - Skopiuj `globals.css` i `theme.css`
   - Dostosuj CSS Modules do Next.js

2. **Migracja obrazów**
   - Przenieś wszystkie obrazy do `public/`
   - Zaktualizuj ścieżki w komponentach

### Faza 7: Testowanie i debugowanie

1. **Sprawdzenie funkcjonalności**

   - Testuj każdą stronę
   - Sprawdź routing
   - Zweryfikuj komponenty

2. **Optymalizacja**
   - Sprawdź wydajność z Turbopack
   - Zoptymalizuj ładowanie obrazów

## Schemat nowej struktury folderów

```
front-end/
├── app/
│   ├── layout.js                 # Główny layout aplikacji
│   ├── page.js                   # Strona główna
│   ├── globals.css               # Globalne style
│   ├── cart/
│   │   └── page.js              # Strona koszyka
│   ├── favourites/
│   │   └── page.js              # Strona ulubionych
│   ├── products/
│   │   ├── page.js              # Lista produktów
│   │   └── [id]/
│   │       └── page.js          # Szczegóły produktu
│   └── not-found.js             # Strona 404
├── components/                   # Wszystkie komponenty (skopiowane z .OLD)
│   ├── Accordion/
│   ├── Bestsellers/
│   ├── Breadcrumbs/
│   ├── Button/
│   ├── CartProduct/
│   ├── CartProductsList/
│   ├── CartSummary/
│   ├── CategoriesMenu/
│   ├── CenteredContent/
│   ├── CurrencySelector/
│   ├── Detail/
│   ├── ExpandableMenu/
│   ├── FavouriteProduct/
│   ├── FavouritesList/
│   ├── FlexContainer/
│   ├── Footer/
│   ├── FullWidthButton/
│   ├── Hero/
│   ├── IconMenu/
│   ├── Layout/
│   ├── Logo/
│   ├── MainContent/
│   ├── MainMenu/
│   ├── PageTitle/
│   ├── Pagination/
│   ├── Photos/
│   ├── Product/
│   └── Products/
├── contexts/                     # Konteksty React (skopiowane z .OLD)
│   ├── CartContext.js
│   └── CurrencyContext.js
├── hooks/                       # Hooki (skopiowane z .OLD)
│   ├── useCart.js
│   └── useCurrency.js
├── constants/                   # Stałe (skopiowane z .OLD)
│   ├── categories.js
│   ├── costs.js
│   ├── curriencies.js
│   ├── genders.js
│   └── mappings.js
├── api/                        # API (skopiowane z .OLD)
│   ├── actionAddToFavourites.js
│   ├── actionDeleteFromFavourites.js
│   ├── loaderFavourites.js
│   ├── loaderMainPage.js
│   ├── loaderProductDetails.js
│   └── loaderProductsList.js
├── public/                     # Statyczne pliki
│   ├── logo_fashion_shop.png
│   ├── hero_summersale.jpg
│   ├── icon_arrow.svg
│   ├── icon_cart.svg
│   ├── icon_delete.svg
│   ├── icon_heart_red.svg
│   ├── icon_heart.svg
│   ├── icon_return.svg
│   ├── icon_shipping.svg
│   └── error.png
├── package.json
├── next.config.js
└── .gitignore
```

Ten plan pozwoli Ci krok po kroku przepisać aplikację, zachowując wszystkie funkcjonalności i stopniowo poznając różnice między React a Next.js.

```plaintext
front-end/
├── app/
│   ├── layout.js                 # Główny layout aplikacji
│   ├── page.js                   # Strona główna
│   ├── globals.css               # Globalne style
│   ├── cart/
│   │   └── page.js              # Strona koszyka
│   ├── favourites/
│   │   └── page.js              # Strona ulubionych
│   ├── products/
│   │   ├── page.js              # Lista produktów
│   │   └── [id]/
│   │       └── page.js          # Szczegóły produktu
│   └── not-found.js             # Strona 404
├── components/                   # Wszystkie komponenty (skopiowane z .OLD)
│   ├── Accordion/
│   ├── Bestsellers/
│   ├── Breadcrumbs/
│   ├── Button/
│   ├── CartProduct/
│   ├── CartProductsList/
│   ├── CartSummary/
│   ├── CategoriesMenu/
│   ├── CenteredContent/
│   ├── CurrencySelector/
│   ├── Detail/
│   ├── ExpandableMenu/
│   ├── FavouriteProduct/
│   ├── FavouritesList/
│   ├── FlexContainer/
│   ├── Footer/
│   ├── FullWidthButton/
│   ├── Hero/
│   ├── IconMenu/
│   ├── Layout/
│   ├── Logo/
│   ├── MainContent/
│   ├── MainMenu/
│   ├── PageTitle/
│   ├── Pagination/
│   ├── Photos/
│   ├── Product/
│   └── Products/
├── contexts/                     # Konteksty React (skopiowane z .OLD)
│   ├── CartContext.js
│   └── CurrencyContext.js
├── hooks/                       # Hooki (skopiowane z .OLD)
│   ├── useCart.js
│   └── useCurrency.js
├── constants/                   # Stałe (skopiowane z .OLD)
│   ├── categories.js
│   ├── costs.js
│   ├── curriencies.js
│   ├── genders.js
│   └── mappings.js
├── api/                        # API (skopiowane z .OLD)
│   ├── actionAddToFavourites.js
│   ├── actionDeleteFromFavourites.js
│   ├── loaderFavourites.js
│   ├── loaderMainPage.js
│   ├── loaderProductDetails.js
│   └── loaderProductsList.js
├── public/                     # Statyczne pliki
│   ├── logo_fashion_shop.png
│   ├── hero_summersale.jpg
│   ├── icon_arrow.svg
│   ├── icon_cart.svg
│   ├── icon_delete.svg
│   ├── icon_heart_red.svg
│   ├── icon_heart.svg
│   ├── icon_return.svg
│   ├── icon_shipping.svg
│   └── error.png
├── package.json
├── next.config.js
└── .gitignore
```
