---
"title": "Przewodnik po analizie stylu obiektywnego i neutralnego"
"summary": "Ten dokument to przewodnik dotyczący tworzenia analiz w stylu obiektywnym i neutralnym. Szczegółowo opisuje punkty, na które należy zwrócić uwagę podczas analizy dokumentów (takie jak ścieżka pliku, data, nazwa projektu, role osób, obiektywne fakty itp.) oraz definiuje strukturę bazy wiedzy (obejmującą indeks plików, indeks projektów, indeks osób, oś czasu i indeks ram teoretycznych). Dokument zawiera również strategię kompresji, wskazującą, jak uprościć treść w razie potrzeby, jednocześnie podkreślając konieczność zachowania kluczowych indeksów. Styl wymaga przedstawiania treści z obiektywnego i neutralnego punktu widzenia, unikając ocen subiektywnych i zabarwienia emocjonalnego. Docelowi odbiorcy to nowi czytelnicy, potencjalni współpracownicy i inwestorzy. Dokument wymienia zakazy (np. nie dodawać wyrażeń emocjonalnych ani spekulacji) oraz obowiązkową strukturę rozdziałów (np. przegląd, wprowadzenie do projektu, kluczowe tematy, oś czasu, główne osoby, podsumowanie ram teoretycznych), a także określa plik wyjściowy i listę kontrolną jakości."
"tags":
  - "analiza dokumentów"
  - "obiektywność i neutralność"
  - "struktura bazy wiedzy"
  - "ekstrakcja informacji"
  - "przewodnik stylistyczny"
  - "pisanie raportów"
  - "dane strukturalne"
---

# Analiza w stylu obiektywnym i neutralnym

## Punkty uwagi podczas czytania

Podczas czytania każdego pliku skup się na wyodrębnieniu:

- Ścieżki i tytułu pliku
- Informacji o dacie
- Wspomnianych nazw projektów i opisów ich funkcji
- Wspomnianych osób i ich ról
- Obiektywnych faktów i danych
- Konkretnych informacji, takich jak numery wersji, kamienie milowe itp.

**Pomiń**: oceny subiektywne, wyrażenia emocjonalne, treści spekulacyjne

## Struktura bazy wiedzy

```
### Indeks plików
| Ścieżka pliku | Tytuł | Data |
|---------------|-------|------|

### Indeks projektów
| Nazwa projektu | Opis | Powiązane pliki |
|----------------|------|-----------------|

### Indeks osób
| Osoba | Rola | Powiązane pliki |
|-------|------|-----------------|

### Oś czasu
| Data | Wydarzenie | Plik źródłowy |
|------|------------|---------------|

### Indeks teorii/ram
| Nazwa | Główna idea | Plik źródłowy |
|-------|-------------|---------------|
```

## Strategia kompresji

Gdy konieczne jest skompresowanie bazy wiedzy:

1. **Należy zachować**: indeks plików (ścieżka+tytuł), indeks projektów, indeks osób
2. **Można uprościć**: oś czasu (zachowaj kluczowe punkty), indeks teorii (zachowaj nazwę i źródło)
3. **Można odrzucić**: szczegółowe opisy, wydarzenia drugorzędne

---

## Pozycjonowanie stylu

Przedstawiaj treść z obiektywnego i neutralnego punktu widzenia, unikaj ocen subiektywnych i zabarwienia emocjonalnego. Podkreślaj fakty i dane, zapewniając dokładność i wiarygodność informacji.

**Docelowi odbiorcy**: Nowi czytelnicy, którzy muszą szybko zrozumieć całość repozytorium; potencjalni współpracownicy; inwestorzy.
**Ton wypowiedzi**: Profesjonalny, powściągliwy, neutralny, jak przy pisaniu CV lub życiorysu.
**Cel**: Pomóc czytelnikom w kompleksowym zrozumieniu podstawowych informacji i kluczowych punktów widzenia zawartych w treści, aby mogli wyrobić sobie własny osąd.

## Zakazy

- ❌ Nie dodawaj wyrażeń emocjonalnych (np. "ekscytujące", "niestety").
- ❌ Nie prowadź spekulacji (np. "może", "być może", "prawdopodobnie").
- ❌ Nie używaj słów o charakterze oceny subiektywnej (np. "doskonały", "kiepski", "ciekawy").
- ❌ Nie oceniaj, co jest dobre, a co złe.
- ❌ Nie używaj pierwszej osoby.

## Obowiązkowa struktura rozdziałów

### Przegląd

- Krótka informacja o właścicielu repozytorium (imię/nazwa/ID, tożsamość, główne obszary działalności).
- Przedział czasowy treści w repozytorium.
- Lista głównych projektów (krótkie wyliczenie).

### Wprowadzenie do projektu

Dla każdego głównego projektu użyj następującej struktury:

```markdown
### [Nazwa projektu]

- **Pochodzenie**: Źródło i tło projektu.
- **Główne funkcje**:
  - Punkt funkcjonalny 1
  - Punkt funkcjonalny 2
- **Iteracje wersji**: Jeśli istnieje historia wersji, krótko ją opisz.
- **Powiązane pliki**: [Tytuł artykułu](../ścieżka/do/pliku.md)
```

### Kluczowe tematy

Pogrupuj treść według kategorii tematycznych:

```markdown
### 1. [Nazwa tematu]

- [Tytuł artykułu1](../ścieżka/do/pliku1.md): Podsumowanie kluczowego punktu widzenia.
- [Tytuł artykułu2](../ścieżka/do/pliku2.md): Podsumowanie kluczowego punktu widzenia.
```

### Oś czasu

Użyj formatu tabeli do przedstawienia kluczowych wydarzeń:

```markdown
| Data       | Kluczowe wydarzenie          |
| ---------- | ---------------------------- |
| RRRR-MM-DD | Opis wydarzenia (stwierdzenie obiektywne) |
```

### Główne osoby

Użyj formatu tabeli:

```markdown
| Osoba    | Rola      | Uwagi          |
| -------- | --------- | -------------- |
| Imię/ID | Stanowisko/Relacja | Powiązane obiektywne informacje |
```

### Podsumowanie ram teoretycznych

Dla teorii/ram zaproponowanych w repozytorium:

```markdown
### [Nazwa ram]

- **Główna idea**: Jednozdaniowe podsumowanie.
- **Kluczowe elementy**: Wymień główne składniki.
- **Wyrażenie matematyczne**: Jeśli istnieje wzór, podaj go.
```

## Plik wyjściowy

`SUMMARY/1-objective.md`

## Lista kontrolna jakości

- [ ] Brak słów o charakterze oceny subiektywnej.
- [ ] Brak wyrażeń emocjonalnych.
- [ ] Wszystkie linki prowadzą do konkretnych plików.
- [ ] Tekst linku to tytuł artykułu.
- [ ] Zawiera wszystkie obowiązkowe rozdziały.
- [ ] Format tabeli osi czasu i osób jest poprawny.