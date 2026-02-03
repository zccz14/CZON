---
"title": "Podstawowe zasady generowania raportów analizy AI"
"summary": "Niniejszy dokument dostarcza podstawowych zasad generowania raportów analizy AI, podkreślając konieczność ścisłego przestrzegania procesu czytania dokumentów, który obejmuje pięć etapów: uzyskanie listy plików, czytanie i streszczanie partiami, zarządzanie kontekstem, weryfikację kompletności oraz generowanie raportu. Zasady kluczowe obejmują przeczytanie wszystkich plików jeden po drugim, oparcie się na faktach, standardowe cytowanie linków oraz uwzględnianie wagi czasowej. Zasady ogólne wymagają, aby raport rozpoczynał się od określonego formatu, był zapisywany w wyznaczonym katalogu oraz zabraniają generowania raportu lub pomijania jakichkolwiek plików przed przeczytaniem wszystkich plików."
"tags":
  - "Analiza AI"
  - "Generowanie raportów"
  - "Czytanie dokumentów"
  - "Zasady"
  - "Markdown"
  - "Podstawa faktów"
  - "Standardy cytowania"
  - "Zarządzanie procesem"
---

# Generowanie raportów analizy AI - Podstawowe zasady

## Proces czytania dokumentów (musi być ściśle przestrzegany)

### Zasady kluczowe

To repozytorium może zawierać setki lub tysiące plików Markdown. Musisz **przeczytać każdy plik jeden po drugim**, nie wolno ich pomijać.
Aby poradzić sobie z dużą liczbą plików, stosuje się strategię **stopniowego czytania i streszczania**.

### Etap 1: Uzyskanie pełnej listy plików

1.  Wykonaj `npx czon@latest ls-files`, aby uzyskać wszystkie pliki Markdown
2.  Zapisz całkowitą liczbę plików N
3.  Zapisz listę plików jako kolejkę do przeczytania

### Etap 2: Czytanie i streszczanie partiami

Przetwarzaj pliki partiami. Sugeruje się partię 10-20 plików, ale możesz dostosować rozmiar partii w zależności od wielkości i złożoności plików.

**Dla każdej partii:**

1.  **Czytanie**: Użyj narzędzia Read, aby przeczytać pełną zawartość każdego pliku w partii
2.  **Ekstrakcja**: Na podstawie **punktów zainteresowania aktualnego stylu** (patrz przewodnik stylu poniżej) wyodrębnij istotne informacje
3.  **Streszczenie partii**: Uporządkuj wyodrębnione informacje z partii w ustrukturyzowane streszczenie
4.  **Akumulacja**: Połącz streszczenie partii z "bazą wiedzy" (struktura bazy wiedzy opisana w przewodniku stylu poniżej)

### Etap 3: Zarządzanie kontekstem

Gdy kontekst zbliża się do limitu:

1.  **Kompresja bazy wiedzy**: Skompresuj bazę wiedzy zgodnie z **strategią kompresji aktualnego stylu** (patrz przewodnik stylu poniżej)
2.  **Zachowanie indeksu**: Niezależnie od kompresji, musisz zachować indeks ścieżek i tytułów wszystkich plików
3.  **Kontynuacja czytania**: Używając skompresowanej bazy wiedzy, kontynuuj przetwarzanie pozostałych plików

### Etap 4: Weryfikacja kompletności

Przed wygenerowaniem raportu musisz potwierdzić:

1.  Wszystkie N plików z listy zostały przetworzone
2.  Baza wiedzy zawiera podstawowe informacje o każdym pliku (przynajmniej ścieżkę i tytuł)

**Jeśli wykryjesz pominięcia**: Wróć do Etapu 2, aby przetworzyć pominięte pliki.

### Etap 5: Generowanie raportu

Dopiero po ukończeniu wszystkich powyższych etapów możesz rozpocząć generowanie raportu.

### Zachowania zabronione

-   ❌ Nie wolno rozpoczynać generowania raportu przed przeczytaniem wszystkich plików
-   ❌ Nie wolno pomijać żadnych plików, niezależnie od ich liczby
-   ❌ Nie wolno twierdzić, że "zna się całość", po przeczytaniu tylko części plików
-   ❌ Nie wolno zmyślać nieistniejących plików lub treści w bazie wiedzy

---

## Zasady ogólne

### 1. Zasada oparcia na faktach

-   Pamiętaj, aby opierać się na treści faktów, nie może występować oderwanie od faktów
-   Wszystkie opinie muszą mieć oparcie w oryginalnym tekście
-   Nie wolno zmyślać nieistniejących treści

### 2. Standardy cytowania linków

-   Cytując link do oryginalnego tekstu, upewnij się, że link jest aktywny
-   **Zawsze linkuj do konkretnego pliku Markdown**, nie linkuj do katalogów
-   **Tekst linku powinien być odpowiadającym tytułem**, a nie nazwą pliku
-   Ponieważ generowanie odbywa się do katalogu SUMMARY, używaj ścieżek względnych zaczynających się od `../`

**Przykład poprawnego użycia**:

```markdown
[Kapitałowa wojna na wyczerpanie: strategia inwestorów indywidualnych do przekraczania klas społecznych](../INSIGHTS/6.md)
[Od tworzenia do dystrybucji – budowanie natywnego dla AI silnika treści](../INSIGHTS/4.md)
```

**Przykład błędnego użycia**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← użyto nazwy pliku zamiast tytułu
[Kapitałowa wojna na wyczerpanie](../INSIGHTS/) ← link prowadzi do katalogu
```

### 3. Format nagłówka

Każdy raport musi zaczynać się od następującego formatu:

```markdown
# [Tytuł raportu]

**Czas analizy AI**: RRRR-MM-DD
**Uwaga**: Ten raport został wygenerowany przez AI, treść ma charakter wyłącznie informacyjny.

---
```

### 4. Waga czasowa

-   Uwzględniaj rozpiętość czasową, nadając wyższą wagę najnowszym artykułom
-   Nie pomijaj jednak ważnych treści starszych

### 5. Lokalizacja wyjściowa

-   Wszystkie raporty generuj do katalogu `SUMMARY/`
-   Nazwy plików nadawaj zgodnie z określonym formatem