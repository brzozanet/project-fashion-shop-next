# 🛒 Fashion contemporary shop

### Projekt sklepu internetowego z koszykiem zakupowym

Aplikacja Fashion contemporary shop to nowoczesny sklep internetowy umożliwiający przeglądanie produktów, dodawanie ich do ulubionych oraz zarządzanie koszykiem zakupowym. Projekt obejmuje frontend w React oraz backend z JSON Server do obsługi danych produktów.

## 🌐 Demo

Aplikacja składa się z dwóch części:

- **Frontend**: Interfejs użytkownika w React
- **Backend**: JSON Server z bazą danych produktów

## 🛠 Użyte technologie

### Frontend

- **React** (v19.1.0 - biblioteka JavaScript do budowania interfejsów użytkownika)
- **Vite** (narzędzie do budowania i rozwoju aplikacji)
- **React Router DOM** (v7.7.0 - nawigacja i routing w aplikacji)
- **React Context** (zarządzanie stanem aplikacji - koszyk i waluta)
- **CSS Modules** (lokalne style komponentów)
- **Modern Normalize** (normalizacja stylów CSS)
- **Nanoid** (generowanie unikalnych identyfikatorów)
- **JavaScript ES6+** (nowoczesna składnia JavaScript)
- **HTML5** (semantyczna struktura dokumentu)
- **CSS3** (zaawansowane style i layout)
- **LocalStorage** (lokalne przechowywanie danych koszyka)

### Backend

- **JSON Server** (v0.17.4 - mock REST API server)
- **Node.js** (środowisko uruchomieniowe JavaScript)

### Narzędzia deweloperskie

- **ESLint** (linting i kontrola jakości kodu)
- **Git & GitHub** (kontrola wersji i hosting kodu)

## 📂 Struktura aplikacji

```
project-fashion-shop/
├── front-end/                      # Aplikacja React
│   ├── src/
│   │   ├── components/             # Komponenty React
│   │   │   ├── Bestsellers/        # Sekcja bestsellerów
│   │   │   ├── Cart*/              # Komponenty koszyka
│   │   │   ├── Categories*/        # Menu kategorii
│   │   │   ├── Currency*/          # Selektor walut
│   │   │   ├── Detail/             # Szczegóły produktu
│   │   │   ├── Favourite*/         # Komponenty ulubionych
│   │   │   ├── Hero/               # Sekcja hero
│   │   │   ├── Layout/             # Layout aplikacji
│   │   │   ├── Product*/           # Komponenty produktów
│   │   │   └── ...
│   │   ├── contexts/               # React Context
│   │   │   ├── CartContext.js      # Kontekst koszyka
│   │   │   └── CurrencyContext.js  # Kontekst waluty
│   │   ├── hooks/                  # Custom hooks
│   │   ├── api/                    # Funkcje API
│   │   ├── constants/              # Stałe aplikacji
│   │   ├── views/                  # Strony aplikacji
│   │   └── styles/                 # Globalne style
|   ├── .env                        # W .gitignore (lokalne ustawienia)
|   ├── .env.example                # W repozytorium (szablon)
│   ├── public/                     # Pliki statyczne
│   └── package.json
├── back-end/                       # JSON Server
│   ├── db.json                     # Baza danych produktów
│   ├── public/product-photos/      # Zdjęcia produktów
│   └── package.json
└── README.md
```

## 📋 Dostępne strony

- **/** - Strona główna z bohaterem i bestsellerami
- **/products** - Lista wszystkich produktów z filtrowaniem
- **/products/:id** - Szczegóły produktu
- **/favourites** - Lista ulubionych produktów
- **/cart** - Koszyk zakupowy
- **404** - Strona błędu dla nieistniejących tras

## 🚀 Jak uruchomić aplikację

### Wymagania wstępne

- Node.js (wersja LTS)
- npm

### Instalacja i uruchomienie

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/brzozanet/project-fashion-shop.git
   cd react-shop-online
   ```

2. Skopiuj plik `.env.example` do `.env`:

   ```bash
   cp .env.example .env
   ```

3. Edytuj plik `.env` i ustaw odpowiednie wartości:

   - `VITE_BACKEND_URL` - adres serwera backend (domyślnie: http://localhost:3000)

4. W terminalu wywołaj:

   ```bash
   npm install
   npm run dev
   ```

   ✅ Oba serwery (frontendowy i backendowy) uruchomią się jednocześnie!

   Frontend będzie dostępny pod adresem: [http://localhost:5173](http://localhost:5173)

   Backend będzie dostępny pod adresem: [http://localhost:3000](http://localhost:3000)

## 🌐 API Endpoints

Backend udostępnia następujące endpointy:

- `GET /products` - Lista wszystkich produktów
- `GET /products/:id` - Szczegóły produktu
- `GET /favourites` - Lista ulubionych produktów
- `POST /favourites` - Dodanie do ulubionych
- `DELETE /favourites/:id` - Usunięcie z ulubionych

## ✨ Funkcjonalności

### Zaimplementowane

- 📱 Responsywny design
- 🛍️ Przeglądanie produktów z paginacją
- 🔍 Filtrowanie produktów (kategoria, płeć)
- ❤️ System ulubionych produktów
- 🛒 Koszyk zakupowy z localStorage
- 💱 Przełączanie walut (PLN, EUR)
- 🔄 Breadcrumbs navigation
- 📦 Szczegóły produktu z galerą zdjęć

## 📝 Uwagi

- Aplikacja wymaga uruchomienia zarówno frontendu jak i backendu
- Dane koszyka są przechowywane lokalnie w localStorage
- Zdjęcia produktów znajdują się w folderze `back-end/public/product-photos/`
- Aplikacja wspiera waluty: PLN, EUR

<br>

![Screenshot App](https://raw.githubusercontent.com/brzozanet/project-fashion-shop/main/front-end/src/images/gh-cover-react-shop-online.jpg)
