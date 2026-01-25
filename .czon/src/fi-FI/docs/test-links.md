---
"title": "Testisivuston sisäisten linkkien dokumentti"
"summary": "Tämä dokumentti on testidokumentti, jonka tarkoituksena on pääasiassa varmistaa sivuston sisäisten linkkien oikeellisuus. Dokumentti tarjoaa kaksi testilinkkiä, jotka osoittavat KaTeX-testidokumenttiin ja Mermaid-kaavioesimerkkiin. Se sisältää myös alaviitetestin, joka näyttää, kuinka alaviitteen sisältö näytetään oikein sivun alalaidassa. Dokumentin keskeinen tavoite on auttaa käyttäjiä testaamaan ja varmistamaan sivuston sisäisten linkkien toimivuus, varmistaen, että linkit ja alaviitteet toimivat oikein sivulla."
"tags":
  - "testaus"
  - "sivuston sisäiset linkit"
  - "dokumentin varmistus"
  - "KaTeX"
  - "Mermaid"
  - "alaviite"
---

# Sivuston sisäisten linkkien testaus

## Sivuston sisäisten Markdown-linkkien testaus

Tämä on testidokumentti, jolla varmistetaan sivuston sisäisten linkkien oikeellisuus.

Klikkaa seuraavia linkkejä testataksesi:

- [Linkki KaTeX-testidokumenttiin](test-katex.md)
- [Linkki Mermaid-kaavioesimerkkiin](test-mermaid.md)

## Alaviitteiden testaus:

Tämä on alaviitteen testi[^1].

[^1]: Tämä on alaviitteen sisältö. Alaviitteen sisällön tulisi näkyä oikein sivun alalaidassa.

## Resurssitiedostojen linkit

Testaa tavallista linkkiä, joka ei ole Markdown-tiedosto tai kuva, vaan sen pitäisi osoittaa alkuperäiseen resurssiin:

[Tämä on linkki JSON-tiedostoon](../package.json)