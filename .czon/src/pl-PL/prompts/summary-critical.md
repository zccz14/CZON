---
"title": "Przewodnik po raporcie analizy stylu krytyki obiektywnej"
"summary": "Niniejszy dokument szczegółowo opisuje, jak przeprowadzić obiektywną analizę stylu krytycznego, obejmującą punkty skupienia podczas czytania, strukturę bazy wiedzy, strategię kompresji, pozycjonowanie stylu, kluczowe zasady, wymaganą strukturę rozdziałów oraz szablon ram krytyki. Podkreśla konstruktywną krytykę opartą na faktach, mającą na celu pomoc docelowym czytelnikom (np. twórcom treści, potencjalnym współpracownikom) w kompleksowym zrozumieniu mocnych i słabych stron treści oraz wspieranie ulepszeń. Dokument dostarcza konkretnych obszarów oceny (takich jak projektowanie architektury, strategie inwestycyjne, praktyki techniczne, systemy teoretyczne) oraz wymagań dotyczących plików wyjściowych, zapewniając profesjonalną i dobrze uzasadnioną analizę."
"tags":
  - "Analiza krytyczna"
  - "Analiza dokumentów"
  - "Konstruktywna informacja zwrotna"
  - "Zarządzanie bazą wiedzy"
  - "Ramy oceny"
  - "Pisanie profesjonalne"
---

# Raport analizy stylu krytyki obiektywnej

## Punkty skupienia podczas czytania

Podczas czytania każdego pliku, skup się na wyodrębnieniu:

- Ścieżki i tytułu pliku
- Przedstawionych poglądów, twierdzeń, propozycji
- Procesu i podstaw argumentacji
- Warunków i założeń
- Potencjalnych luk lub sprzeczności logicznych
- Sytuacji weryfikacji praktycznej
- Spójności/sprzeczności z innymi plikami

**Szczególna uwaga**: Stwierdzenia asertywne, wnioskowanie przyczynowo-skutkowe, odwołania do danych, założenia wstępne

## Struktura bazy wiedzy

```
### Indeks plików
| Ścieżka pliku | Tytuł | Główne twierdzenia |
|----------|------|----------|

### Indeks twierdzeń i argumentacji
| Twierdzenie | Podstawa argumentacji | Ocena siły | Plik źródłowy |
|------|----------|----------|----------|

### Indeks warunków założeń
| Założenie | Rozsądność | Powiązane twierdzenie | Plik źródłowy |
|------|--------|----------|----------|

### Indeks potencjalnych problemów
| Typ problemu | Opis | Zakres wpływu | Plik źródłowy |
|----------|------|----------|----------|

### Indeks dowodów na mocne strony
| Mocna strona | Dowód | Plik źródłowy |
|--------|------|----------|

### Rekord sprzeczności/niespójności
| Treść A | Treść B | Opis sprzeczności | Plik źródłowy |
|-------|-------|----------|----------|
```

## Strategia kompresji

Gdy konieczna jest kompresja bazy wiedzy:

1. **Należy zachować**: Indeks plików, indeks twierdzeń i argumentacji, indeks potencjalnych problemów
2. **Można uprościć**: Indeks warunków założeń (zachować kluczowe założenia), dowody na mocne strony (zachować typowe przypadki)
3. **Można odrzucić**: Szczegółowe opisy drugorzędnych problemów

---

## Pozycjonowanie stylu

Obiektywna analiza krytyczna treści oparta na faktach, wskazująca jej mocne i słabe strony.

**Docelowi czytelnicy**: Czytelnicy pragnący dogłębnie ocenić wartość treści, potencjalni współpracownicy, sam twórca treści
**Ton pisania**: Profesjonalny, konstruktywny, dobrze uzasadniony
**Cel**: Pomoc czytelnikom w pełniejszym zrozumieniu treści, identyfikacji mocnych i słabych stron, wspieranie ulepszeń

## Kluczowe zasady

- ✅ Krytyka oparta na dowodach faktualnych, nie na subiektywnych domysłach
- ✅ Krytyka jest konstruktywna, zawiera sugestie ulepszeń
- ✅ Uznawanie mocnych stron przy jednoczesnym wskazywaniu niedociągnięć
- ❌ Nie jest negacją lub deprecjacją
- ❌ Brak ataków osobistych

## Wymagana struktura rozdziałów

### Przegląd

Krótkie wprowadzenie do analizowanego obiektu i zakresu analizy

### Ocena projektowania architektury

- Analiza wykonalności
- Wystarczalność weryfikacji
- Sytuacja wdrożenia praktycznego
- **Sugestie ulepszeń**

### Analiza inwestycji/strategii

- Sprawdzenie spójności logicznej
- Przegląd warunków założeń
- Identyfikacja ryzyka
- **Sugestie ulepszeń**

### Ocena praktyk technicznych

- Rozsądność wyboru technologii
- Jakość implementacji
- Utrzymywalność
- **Sugestie ulepszeń**

### Ocena systemów teoretycznych

- Rygorystyczność metodologii
- Zakres zastosowania
- Ograniczenia
- **Sugestie ulepszeń**

### Kompleksowe sugestie konstruktywne

Wymień sugestie ulepszeń według priorytetu:

1. Sugestie o wysokim priorytecie
2. Sugestie o średnim priorytecie
3. Sugestie długoterminowe

## Szablon ram krytyki

```markdown
### [Obszar oceny]

**Opis stanu obecnego**:
[Obiektywny opis aktualnego stanu, z odwołaniem do konkretnych plików]

**Mocne strony**:

- Mocna strona 1 (dowód: [link])
- Mocna strona 2 (dowód: [link])

**Niedociągnięcia**:

- Niedociągnięcie 1 (dowód: [link])
  - Opis konkretnego problemu
  - Potencjalny wpływ
- Niedociągnięcie 2 (dowód: [link])

**Sugestie ulepszeń**:

1. Sugestia 1: Konkretny, możliwy do wdrożenia plan ulepszeń
2. Sugestia 2: Konkretny, możliwy do wdrożenia plan ulepszeń
```

## Plik wyjściowy

`SUMMARY/2-critical.md`

## Lista kontrolna jakości

- [ ] Każdy punkt krytyczny ma podstawę w faktach
- [ ] Każdy punkt krytyczny zawiera sugestię ulepszeń
- [ ] Ton jest profesjonalny, brak ataków osobistych
- [ ] Analiza mocnych i słabych stron jest zrównoważona
- [ ] Wszystkie linki są poprawne