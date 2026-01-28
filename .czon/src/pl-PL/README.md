---
"title": "CZON - AI-Natywny silnik treści Markdown"
"summary": "CZON to AI-natywny silnik treści Markdown, zaprojektowany, aby pomóc twórcom treści uprościć proces pisania. Kładzie nacisk na pisanie bez konfiguracji, głęboko integrując technologię AI, aby automatycznie obsługiwać zadania takie jak generowanie tytułów, ekstrakcja podsumowań, kategoryzacja tagów, tłumaczenie wielojęzyczne i nawigacja po witrynie, minimalizując zakłócenia dla użytkownika. CZON posiada wbudowaną funkcję generowania statycznych witryn, ale koncentruje się głównie na tworzeniu i zarządzaniu treścią, a nie na złożonym dostosowywaniu motywów. Jest odpowiedni dla użytkowników, którzy chcą pisać w języku ojczystym i automatycznie generować wersje wielojęzyczne, szczególnie dla twórców treści internetowych, którzy nie lubią skomplikowanej konfiguracji."
"tags":
  - "CZON"
  - "AI-Natywny"
  - "Markdown"
  - "Silnik treści"
  - "Tłumaczenie wielojęzyczne"
  - "Generowanie statycznych witryn"
  - "Zero konfiguracji"
  - "Tworzenie treści"
---

![Logo CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Zobacz stronę internetową CZON 🚀
    </a>
</div>

# CZON - AI-Natywny silnik treści Markdown

- **C**: **C**ontent oriented | Treść jest królem, skupienie na treści
- **Z**: **Z**ero Configuration | Pisanie bez konfiguracji, minimalizacja zakłóceń
- **O**: **O**rganic AI-Native | Organicznie AI-natywny, głęboka integracja AI
- **N**: **N**-shaped Energy Curve | Krzywa energii w kształcie litery N, angażująca się w każdy etap: tworzenie, dystrybucja, feedback

W erze AI, jako twórcy treści internetowych, możemy mieć inteligentniejszy silnik do tworzenia treści.

**Powrót do treści: Minimalizacja zakłóceń, skupienie na pisaniu**

Niech dokumenty wrócą do swojej istoty, a pisanie do spokoju.

Po pierwsze, nie chcę być bibliotekarzem. Czasami chcę coś napisać, ale może jeszcze nie wymyśliłem tytułu, nie ukształtowałem struktury. Chcę, aby LLM automatycznie pomógł mi wygenerować tytuł, stworzyć podsumowanie, sklasyfikować, zorganizować nawigację i inne zadania porządkowe.

Po drugie, moje biurko musi być czyste. Nie chcę skomplikowanych narzędzi do budowania, nie chcę bawić się złożoną konfiguracją dokumentów, nie lubię skomplikowanych struktur. Za każdym razem, gdy widzę pliki konfiguracyjne i strukturę projektów takich narzędzi jak Docusaurus, VuePress, Astro, boli mnie głowa. Teraz CZON wybiera ukrycie całej konfiguracji w katalogu `.czon`, zamiatając ją w kąt. Użytkownik musi skupić się tylko na pisaniu treści, resztą zajmie się CZON. Pozostałe katalogi to Twoja przestrzeń do pisania, możesz dowolnie organizować swoje pliki Markdown.

**Powrót do języka ojczystego: Pisz w języku ojczystym, płynnie twórz wersje wielojęzyczne**

Życie jest krótkie, nie chce mi się tłumaczyć. Człowiek myśli najgłębiej, gdy używa języka ojczystego. Ale jednocześnie konieczne jest utrzymanie połączenia ze światem, nie chcę rezygnować z komunikacji wielojęzycznej. Dlatego chcę mieć narzędzie, które pozwoli mi pisać w języku ojczystym, a jednocześnie dotrzeć do większej liczby osób. Obecne i18n wymaga nie tylko własnego tłumaczenia, ale także ręcznej aktualizacji treści, to zbyt uciążliwe. Wybieram użycie LLM do pomocy w tłumaczeniu, oszczędza mi to dużo czasu i pozwala na jednym kliknięciu przetłumaczyć na wiele języków.

## ✨ Kluczowe funkcje

1. 🌍 **AI Tłumaczenie wielojęzyczne**: Użyj AI do tłumaczenia przyrostowego, pozwól użytkownikom pisać Markdown w języku ojczystym, ale użytkownicy mogą być wielojęzyczni.
2. 📊 **AI Ekstrakcja metadanych**: Automatycznie wyodrębniaj tytuł, opis, podsumowanie, słowa kluczowe, grupę docelową, przyjazne dla URL aliasy itp.
3. 🏷️ **AI Kategoryzacja tagów**: Użyj AI do ekstrakcji i zarządzania tagami oraz kategoriami treści.
4. 🧭 **AI Nawigacja kategoriami**: Użyj AI do generowania mapy witryny i nawigacji, położenie plików źródłowych nie ma znaczenia.
5. 🤖 **AI Podsumowanie całej witryny**: Generuj podsumowanie całej witryny w różnych stylach.

Oraz kilka funkcji nie-AI:

1. ⚙️ **Zero konfiguracji**: Wszystkie konfiguracje i pamięć podręczna ukryte w katalogu `.czon`, struktura projektu pozostaje czysta.
2. 🔄 **Budowanie przyrostowe**: Wykrywanie zmian na podstawie skrótu (hash) treści, przetwarzanie tylko zmienionych plików.
3. 📚 **Wsparcie rozszerzeń Markdown**: Natywne wsparcie dla formuł matematycznych KaTeX, diagramów Mermaid, karuzel Embla, przypisów itp.
4. 🚀 **Generowanie statycznych witryn**: Wbudowany SSG oparty na React, generuje wielojęzyczne statyczne witryny.
5. 🌐 **Automatyczne routowanie wg języka odwiedzającego**: Automatyczne przekierowanie do odpowiedniej wersji językowej na podstawie języka odwiedzającego.

## 📦 Szybki start

### Wymagania wstępne

- Zainstalowany [Node.js](https://nodejs.org/) (zalecana wersja LTS 24 lub wersja 18 i wyższa, wymagane polecenie `npx`)
- Uzyskany [Klucz API OpenAI](https://platform.openai.com/account/api-keys) lub kompatybilny klucz API OPENAI
- Zainstalowany Git (do listowania plików Markdown z Git, ignorując pliki filtrowane przez reguły .gitignore)

### Konfiguracja zmiennych środowiskowych

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Wymagane: zastąp swoim kluczem API OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcjonalne, domyślnie używa oficjalnego API OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcjonalne, domyślnie używa modelu gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opcjonalne, ustaw limit maksymalnej liczby tokenów (pominięcie użyje wartości domyślnej modelu; dla długich tłumaczeń zaleca się wyższą wartość, np. 8192, w zależności od maksymalnej liczby tokenów obsługiwanej przez używany model)

# Jeśli potrzebujesz użyć proxy HTTP do dostępu do API OpenAI, możesz ustawić poniższe zmienne
export HTTPS_PROXY="http://your-proxy.com:8080"  # Opcjonalne, ustaw proxy HTTPS
export HTTP_PROXY="http://your-proxy.com:8080"   # Opcjonalne, ustaw proxy HTTP
```

### Budowanie wielojęzycznej witryny

W dowolnym folderze zarządzanym przez Git uruchom:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Ponieważ kody języków będą później używane w wielu funkcjach podczas generowania statycznej witryny, upewnij się, że używasz kodów języków zgodnych ze standardem BCP 47. Na przykład `zh-Hans` oznacza chiński uproszczony, `en-US` oznacza angielski amerykański. Możesz dodać więcej języków według potrzeb, np. `es-ES` (hiszpański), `ja-JP` (japoński), `ko-KR` (koreański) itp.
Listę standardowych kodów języków znajdziesz w [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Katalog wyjściowy: `.czon/dist`, następnie należy wdrożyć zawartość tego katalogu na platformę hostującą statyczne witryny.

Szczegółowe użycie: uruchom `npx czon@latest --help`.

## 🔗 Porównanie z innymi narzędziami

| Funkcja               | CZON                     | Docusaurus      | VuePress        | Astro           |
| --------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-natywny**        | ✅ Głęboko zintegrowany  | ❌              | ❌              | ❌              |
| **Zero konfiguracji** | ✅ Ukryta konfiguracja   | ❌ Wymaga pliku konfiguracyjnego | ❌ Wymaga pliku konfiguracyjnego | ❌ Wymaga pliku konfiguracyjnego |
| **Wielojęzyczne tłumaczenie AI** | ✅ Automatyczne tłumaczenie przyrostowe | ❌ Tłumaczenie ręczne | ❌ Tłumaczenie ręczne | ❌ Tłumaczenie ręczne |
| **Automatyczna kategoryzacja/tagi** | ✅ Ekstrakcja AI | ❌ Konfiguracja ręczna | ❌ Konfiguracja ręczna | ❌ Konfiguracja ręczna |
| **Rozszerzenia Markdown** | ✅ KaTeX, Mermaid, Embla | ✅ Poprzez wtyczki | ✅ Poprzez wtyczki | ✅ Poprzez wtyczki |
| **Dostosowywanie motywów** | ❌ Ograniczone | ✅ Bogate | ✅ Bogate | ✅ Bogate |

CZON pozycjonuje się jako **silnik treści wzmocniony AI**, a nie pełnoprawny SSG. Skupia się na zwiększaniu efektywności tworzenia treści poprzez AI, jest odpowiedni dla twórców skupiających się na jakości treści, którzy chcą zmniejszyć obciążenie konfiguracyjne. W rzeczywistości CZON może być używany w połączeniu z narzędziami SSG takimi jak Docusaurus, VuePress, Astro, jako frontendowy silnik do generowania i zarządzania treścią.

## 📞 Wsparcie

- Strona projektu: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- Problemy na GitHub: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Dyskusje na Discord: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Przywracając spokój pisaniu, pozwalając treściom naturalnie rosnąć._