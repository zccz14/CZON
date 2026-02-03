---
"title": "Objektiivisen kriittisen tyylianalyysin raportointiohje"
"summary": "Tämä asiakirja kuvaa yksityiskohtaisesti, miten suoritetaan objektiivinen kriittinen tyylianalyysi, mukaan lukien lukemisen painopisteet, tietokannan rakenne, tiivistysstrategia, tyylin määrittely, perusperiaatteet, vaadittu luku rakenne ja kriittisen arvioinnin viitekehysmalli. Se korostaa faktoihin perustuvaa rakentavaa kritiikkiä ja pyrkii auttamaan kohderyhmää (kuten sisällöntuottajia, mahdollisia yhteistyökumppaneita) ymmärtämään sisällön vahvuudet ja heikkoudet kokonaisvaltaisesti sekä edistämään parannusta. Asiakirja tarjoaa konkreettisia arviointialueita (kuten arkkitehtuurisuunnittelu, sijoitusstrategiat, teknologiset käytännöt, teoreettiset järjestelmät) ja tulostiedostovaatimuksia varmistaen, että analyysi on ammattimainen ja perusteltu."
"tags":
  - "Kriittinen analyysi"
  - "Asiakirja-analyysi"
  - "Rakentava palaute"
  - "Tietokannan hallinta"
  - "Arviointiviitekehys"
  - "Ammatillinen kirjoittaminen"
---

# Objektiivisen kriittisen tyylianalyysin raportti

## Lukemisen painopisteet

Lue jokainen tiedosto keskittyen seuraavien asioiden poimimiseen:

- Tiedostopolku ja otsikko
- Esitetyt näkemykset, väitteet, ratkaisut
- Argumentointiprosessi ja sen perusteet
- Oletusehdot ja edellytykset
- Mahdolliset loogiset puutteet tai ristiriidat
- Käytännön vahvistustilanne
- Yhdenmukaisuus/ristiriidat muiden tiedostojen kanssa

**Erityistä huomiota**: Väittävät lauseet, syy-seuraus-päättely, tietojen viittaukset, oletusedellytykset

## Tietokannan rakenne

```
### Tiedostoindeksi
| Tiedostopolku | Otsikko | Pääväitteet |
|----------|------|----------|

### Väitteiden ja argumentoinnin indeksi
| Väite | Argumentointiperuste | Vahvuusarvio | Lähdetiedosto |
|------|----------|----------|----------|

### Oletusehtojen indeksi
| Oletus | Kohtuullisuus | Liittyvä väite | Lähdetiedosto |
|------|--------|----------|----------|

### Mahdollisten ongelmien indeksi
| Ongelman tyyppi | Kuvaus | Vaikutusalue | Lähdetiedosto |
|----------|------|----------|----------|

### Vahvuustodisteiden indeksi
| Vahvuuskohta | Todiste | Lähdetiedosto |
|--------|------|----------|

### Ristiriitojen/epäjohdonmukaisuuksien tallenne
| Sisältö A | Sisältö B | Ristiriidan kuvaus | Lähdetiedosto |
|-------|-------|----------|----------|
```

## Tiivistysstrategia

Kun tietokantaa on tarpeen tiivistää:

1. **On säilytettävä**: Tiedostoindeksi, väitteiden ja argumentoinnin indeksi, mahdollisten ongelmien indeksi
2. **Voidaan tiivistää**: Oletusehtojen indeksi (säilytä keskeiset oletukset), vahvuustodisteet (säilytä tyypilliset tapaukset)
3. **Voidaan hylätä**: Vähäpätöisten ongelmien yksityiskohtainen kuvaus

---

## Tyylin määrittely

Perustuu faktoihin, sisällön objektiiviseen kriittiseen analyysiin, sen vahvuuksien ja heikkouksien osoittamiseen.

**Kohderyhmä**: Lukijat, jotka haluavat arvioida sisällön arvoa syvällisesti, mahdolliset yhteistyökumppanit, sisällöntuottaja itse
**Kirjoitustyyli**: Ammattimainen, rakentava, perusteltu
**Tarkoitus**: Auttaa lukijaa ymmärtämään sisältöä kokonaisvaltaisemmin, tunnistamaan vahvuudet ja heikkoudet sekä edistämään parannusta

## Perusperiaatteet

- ✅ Kritiikki perustuu faktatodisteisiin, ei subjektiivisiin olettamuksiin
- ✅ Kritiikki on rakentavaa, ehdottaa parannuksia
- ✅ Vahvuuksien tunnustaminen samalla kun osoitetaan puutteita
- ❌ Ei ole kieltämistä tai aliarviointia
- ❌ Ei henkilökohtaista hyökkäystä

## Vaadittu luku rakenne

### Yleiskatsaus

Lyhyt esittely analysoitavasta kohteesta ja analyysin laajuudesta

### Arkkitehtuurisuunnittelun arviointi

- Toteutettavuusanalyysi
- Vahvistuksen riittävyys
- Käytännön toteutustilanne
- **Parannusehdotukset**

### Sijoitus-/strategia-analyysi

- Loogisen johdonmukaisuuden tarkastus
- Oletusehtojen tarkastelu
- Riskien tunnistaminen
- **Parannusehdotukset**

### Teknisten käytäntöjen arviointi

- Teknologian valinnan kohtuullisuus
- Toteutuksen laatu
- Ylläpidettävyys
- **Parannusehdotukset**

### Teoreettisten järjestelmien arviointi

- Metodologian tiukkuus
- Soveltamisala
- Rajoitukset
- **Parannusehdotukset**

### Yhdistetyt rakentavat ehdotukset

Listaa parannusehdotukset prioriteettijärjestyksessä:

1. Korkean prioriteetin ehdotukset
2. Keskitasoisen prioriteetin ehdotukset
3. Pitkän aikavälin ehdotukset

## Kriittisen arvioinnin viitekehysmalli

```markdown
### [Arviointialue]

**Nykyisen tilan kuvaus**:
[Objektiivinen kuvaus nykytilasta, viittaa tiettyihin tiedostoihin]

**Vahvuudet**:

- Vahvuuskohta 1 (todiste: [linkki])
- Vahvuuskohta 2 (todiste: [linkki])

**Puutteet**:

- Puutekohdan 1 (todiste: [linkki])
  - Tarkka ongelmakuva
  - Mahdollinen vaikutus
- Puutekohdan 2 (todiste: [linkki])

**Parannusehdotukset**:

1. Ehdotus 1: Konkreettinen, toteutettava parannussuunnitelma
2. Ehdotus 2: Konkreettinen, toteutettava parannussuunnitelma
```

## Tulostiedosto

`SUMMARY/2-critical.md`

## Laadun tarkistuslista

- [ ] Jokaisella kriittisellä kohdalla on faktatodisteet
- [ ] Jokaisella kriittisellä kohdalla on parannusehdotus
- [ ] Tyylilaji on ammattimainen, ei henkilökohtaista hyökkäystä
- [ ] Vahvuuksien ja heikkouksien analyysi on tasapainoinen
- [ ] Kaikki linkit ovat toimivia