---
"title": "Opas CZON-staattisen sivuston käyttöönottoon GitHub Pagesiin"
"summary": "Tässä artikkelissa kuvataan yksityiskohtaisesti, kuinka CZON:lla luotu monikielinen staattinen sivusto otetaan käyttöön GitHub Pagesiin GitHub CLI:n avulla. Ensin on asennettava ja kirjauduttava GitHub CLI:hin sekä varmistettava repo-oikeudet. Sen jälkeen suoritetaan komento npx czon@latest config github, joka ohjaa käyttäjän useiden vaiheiden läpi: oikeuksien tarkistus, Git-repositorion alustaminen, etärepositorion määrittäminen, GitHub Pagesin käyttöönotto ja asettaminen workflow-tyypiksi, Workflow-tiedoston luominen tai päivittäminen, muutosten tallentaminen ja lähettäminen sekä lopuksi Pages-URL:n haku. Koko prosessi on automatisoitu ja yksinkertaistaa käyttöönottoa."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "staattinen sivusto"
  - "käyttöönotto-opas"
  - "GitHub CLI"
  - "monikielinen"
  - "automatisoitu käyttöönotto"
---

# Käyttöönotto GitHub Pagesiin

Tämä opas esittelee, kuinka CZON:lla luotu monikielinen staattinen sivusto otetaan käyttöön GitHub Pagesiin GitHub CLI:n avulla.

Asenna ensin [GitHub CLI](https://cli.github.com/)-työkalu (jos sitä ei ole vielä asennettuna) ja varmista, että olet kirjautunut sisään (jos et ole vielä kirjautunut):

```bash
$ gh --version # Tarkista versio varmistaaksesi onnistuneen asennuksen
```

Varmista, että olet kirjautunut sisään ja että sinulla on `repo`-oikeudet kohderepositorioon:

```bash
$ gh auth login -s repo # Kirjaudu GitHub-tilillesi; sinua pyydetään valitsemaan selainkirjautuminen tai token-kirjautuminen
$ gh auth status # Tarkista kirjautumistilasi; varmista, että kirjautuminen onnistui ja sinulla on repo-oikeudet kohderepositorioon
```

Lopuksi riittää suorittaa seuraava komento ja noudattaa ohjeita:

```bash
$ npx czon@latest config github
```

Tämä komento ohjaa sinut seuraavien vaiheiden läpi:

1.  Tarkistaa, sisältääkö gh:n oikeudet repo-oikeuden; jos ei, kehottaa kirjautumaan uudelleen ja lisäämään repo-oikeuden.
2.  Jos paikallinen hakemisto ei ole Git-repositorio, kehottaa alustamaan uuden Git-repositorion.
3.  Tarkistaa paikallisen hakemiston etä-Git-repositorion asetukset ja katsoo, onko GitHub-etärepositoriota. Jos GitHub-etärepositoriota ei ole, kehottaa luomaan uuden etärepositorion ja lisäämään sen etäalkuperäksi (origin). Jos origin on jo olemassa mutta ei ole GitHub-repositorio, kehottaa lisäämään uuden GitHub-etärepositorion ylävirtana (upstream).
4.  Tarkistaa, onko GitHub Pages käytössä ja onko se workflow-tyyppiä. Jos ei ole, ottaa sen käyttöön ja korjaa sen API:n `gh api` avulla niin, että se käyttöönotetaan Actionsista. Asettaa myös CNAME:n (jos sinulla on mukautettu verkkotunnus).
5.  Tarkistaa GitHub Workflow -tiedoston. Jos sitä ei ole luotu, luo Pages Workflow -tiedoston; jos se on jo olemassa mutta ei ole uusin versio, kehottaa päivittämään Workflow-tiedoston.
6.  Tallentaa Workflow-tiedoston ja lähettää muutokset etärepositorioon.
7.  Kehottaa käymään GitHub Pages -sivuston URL-osoitteessa; hakee uusimman Pages-URL:n gh api:n avulla.