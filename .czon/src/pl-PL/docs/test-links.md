---
"title": "Dokument testowy linków wewnętrznych"
"summary": "Ten dokument służy do testowania poprawności linków wewnętrznych. Zawiera dwa linki testowe: jeden prowadzący do dokumentu testowego KaTeX, a drugi do przykładu diagramu Mermaid. Dodatkowo zawiera test przypisów, pokazujący prawidłowy sposób wyświetlania treści przypisów na dole strony. Głównym celem dokumentu jest pomoc użytkownikom w testowaniu i weryfikacji funkcjonalności linków wewnętrznych, aby upewnić się, że linki i przypisy działają poprawnie na stronie."
"tags":
  - "test"
  - "linki wewnętrzne"
  - "weryfikacja dokumentu"
  - "KaTeX"
  - "Mermaid"
  - "przypisy"
---

# Testowanie linków wewnętrznych

## Test linków Markdown wewnątrz witryny

To jest dokument testowy służący do weryfikacji poprawności linków wewnętrznych.

Kliknij poniższe linki, aby je przetestować:

- [Link do dokumentu testowego KaTeX](test-katex.md)
- [Link do przykładu diagramu Mermaid](test-mermaid.md)

## Test przypisów:

To jest test przypisu[^1].

[^1]: To jest treść przypisu, która powinna być prawidłowo wyświetlona na dole strony.

## Linki do plików zasobów

Test zwykłego linku do pliku innego niż Markdown lub obrazka, który powinien prowadzić do oryginalnego zasobu:

[To jest link do pliku JSON](../package.json)