---
"title": "CZON - AI-Native Markdown Content Engine"
"summary": "CZON to natywny dla AI silnik treści Markdown, zaprojektowany, aby pomóc twórcom treści uprościć proces pisania. Kładzie nacisk na pisanie bez konfiguracji, głęboko integrując technologię AI, aby automatycznie obsługiwać zadania takie jak generowanie tytułów, ekstrakcja podsumowań, klasyfikacja tagów, tłumaczenie wielojęzyczne i nawigacja po witrynie, minimalizując zakłócenia dla użytkownika. CZON ma wbudowaną funkcję generowania statycznych witryn, ale koncentruje się głównie na tworzeniu i zarządzaniu treścią, a nie na złożonym dostosowywaniu motywów. Jest odpowiedni dla użytkowników, którzy chcą pisać w swoim języku ojczystym i automatycznie generować wersje wielojęzyczne, szczególnie dla twórców treści internetowych, którzy nie lubią skomplikowanej konfiguracji."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Silnik treści"
  - "Tłumaczenie wielojęzyczne"
  - "Generowanie statycznych witryn"
  - "Zero konfiguracji"
  - "Tworzenie treści"
---

![Logo CZON](logo.png)

# CZON - AI-Native Markdown Content Engine

- **C**: **C**ontent oriented | Treść jest królem, skupienie na treści
- **Z**: **Z**ero Configuration | Pisanie bez konfiguracji, mniej zakłóceń
- **O**: **O**rganic AI-Native | Organicznie natywny dla AI, głęboka integracja AI
- **N**: **N**-shaped Energy Curve | Krzywa energii w kształcie litery N, angażująca się w każdy etap: tworzenie, dystrybucję, informację zwrotną

[> Demo strony internetowej](https://czon.zccz14.com/)

W erze AI, jako twórcy treści internetowych, możemy mieć inteligentniejszy silnik do tworzenia treści.

**Powrót do treści: Minimalizacja zakłóceń, skupienie na pisaniu**

Niech dokumenty wrócą do swojej istoty, a pisanie do spokoju.

Po pierwsze, nie chcę być bibliotekarzem. Czasami chcę coś napisać, ale może jeszcze nie wymyśliłem tytułu, nie ukształtowałem struktury. Chcę, aby LLM automatycznie pomógł mi wygenerować tytuł, stworzyć podsumowanie, sklasyfikować, zorganizować nawigację i inne prace porządkowe.

Po drugie, mój gabinet musi być posprzątany. Nie chcę skomplikowanych narzędzi do budowania, nie chcę męczyć się ze złożoną konfiguracją dokumentów, nie lubię skomplikowanych struktur. Za każdym razem, gdy widzę pliki konfiguracyjne i struktury projektów takich narzędzi jak Docusaurus, VuePress, Astro, boli mnie głowa. Teraz CZON wybiera ukrycie całej konfiguracji w katalogu `.czon`, zamiatając ją w kąt. Użytkownik musi skupić się tylko na pisaniu treści, resztą zajmie się CZON. Wszystkie inne katalogi to Twoja przestrzeń do pisania, możesz dowolnie organizować swoje pliki Markdown.

**Powrót do języka ojczystego: Pisz w języku ojczystym, płynnie buduj wersje wielojęzyczne**

Życie jest krótkie, nie chce mi się tłumaczyć. Człowiek myśli najgłębiej, gdy używa języka ojczystego. Ale jednocześnie utrzymywanie połączenia ze światem jest konieczne, nie chcę rezygnować z komunikacji wielojęzycznej. Dlatego chcę narzędzia, które pozwoli mi pisać w języku ojczystym, a jednocześnie umożliwi większej liczbie osób zobaczenie mojej treści. Obecne rozwiązania i18n wymagają nie tylko własnego tłumaczenia, ale także samodzielnego utrzymywania aktualizacji treści, to zbyt uciążliwe. Wybieram użycie LLM do pomocy w tłumaczeniu, oszczędza mi to dużo czasu i pozwala na tłumaczenie na wiele języków jednym kliknięciem.

## Podstawowe funkcje

1. 🌍 **Automatyczne tłumaczenie wielojęzyczne**: Używa AI do tłumaczenia przyrostowego, pozwalając użytkownikowi pisać Markdown w języku ojczystym, ale użytkownik może być wielojęzyczny.
2. 💭 **Automatyczne ekstrahowanie podsumowania**: Używa AI do analizy i ekstrakcji treści z oryginalnego tekstu.
3. 🏷️ **Automatyczna klasyfikacja tagów**: Używa AI do ekstrakcji i zarządzania tagami oraz klasyfikacją treści.
4. 🧭 **Inteligentna nawigacja kategorii**: Używa AI do generowania mapy witryny i nawigacji, położenie plików źródłowych nie ma znaczenia.

## Generowanie statycznych witryn (SSG)

CZON ma wbudowane rozwiązanie SSG, które może przekształcić dowolny folder git zawierający Markdown w statyczną witrynę HTML.

⚠️ Uwaga: CZON nie jest profesjonalnym generatorem statycznych witryn (SSG), lecz silnikiem treści Markdown napędzanym AI, skupiającym się na tworzeniu i zarządzaniu treścią.

✅ CZON ma na celu uproszczenie procesu tworzenia i publikowania treści, pozwalając użytkownikom skupić się na samym pisaniu, zamiast być nękanym przez skomplikowaną konfigurację i narzędzia.

❌ CZON nie zapewnia złożonego dostosowywania motywów i ekosystemu wtyczek, skupia się raczej na poprawie jakości i dostępności treści poprzez AI.

🔔 Jednak CZON nadal może generować statyczne witryny. W razie potrzeby można użyć CZON jako preprocesora, integrując go z innymi rozwiązaniami SSG, aby generować spersonalizowane, estetyczne witryny.

## Szybki start

Wymagania wstępne:

- Zainstalowany [Node.js](https://nodejs.org/) (zalecana wersja 18 lub nowsza, wymagane polecenie `npx`)
- Uzyskany [Klucz API OpenAI](https://platform.openai.com/account/api-keys) lub kompatybilny klucz API OPENAI
- Zainstalowany Git (do listowania plików Markdown z Git, ignorując pliki filtrowane przez reguły `.gitignore`)

Najpierw pracuj w folderze już zarządzanym przez git:

Skonfiguruj zmienne środowiskowe

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Wymagane: zastąp swoim kluczem API OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcjonalne, domyślnie używa oficjalnego API OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcjonalne, domyślnie używa modelu gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opcjonalne, ustawia limit maksymalnej liczby tokenów (pominięcie używa wartości domyślnej modelu; dla długich tłumaczeń zaleca się ustawienie wyższej wartości, np. 8192, w zależności od maksymalnej liczby tokenów obsługiwanej przez używany model)
```

Zbuduj witrynę, z obsługą tłumaczenia wielojęzycznego. Użyj bieżącego katalogu jako katalogu źródłowego, wynik do katalogu `.czon/dist`.

- Można wielokrotnie użyć parametru `--lang`, aby określić wersje językowe do wygenerowania (np. `--lang zh-Hans --lang en-US`).
- Nie trzeba konfigurować języka źródłowego, CZON wykryje go automatycznie.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Zobacz więcej parametrów lub pomoc**:

```bash
npx czon@latest
```