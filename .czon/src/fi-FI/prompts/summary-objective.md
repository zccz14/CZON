---
"title": "Objektiivisen ja neutraalin tyylin analyysiraportin opas"
"summary": "Tämä dokumentti on opas objektiivisen ja neutraalin tyylin analyysiraportin luomiseen. Se kuvailee yksityiskohtaisesti, mihin lukijoiden tulisi kiinnittää huomiota dokumentteja analysoitaessa (kuten tiedostopolku, päivämäärä, projektin nimi, henkilöiden roolit, objektiiviset faktat jne.), ja määrittelee tietokannan rakenteen (mukaan lukien tiedostoindeksi, projekti-indeksi, henkilöindeksi, aikajana ja teoreettinen viitekehysindeksi). Dokumentti tarjoaa myös tiivistysstrategian, joka ohjaa sisällön tiivistämistä tarvittaessa samalla korostaen, että keskeiset indeksit on säilytettävä. Tyylin tulee esitellä sisältöä objektiivisesta ja neutraalista näkökulmasta välttäen subjektiivisia arvioita ja tunnesävyjä. Kohderyhmään kuuluvat uudet lukijat, mahdolliset yhteistyökumppanit ja sijoittajat. Dokumentti listaa kielletyt asiat (kuten tunneilmaisujen tai spekulaation lisääminen) ja vaaditut lukuosiot (kuten yleiskatsaus, projektiesittelyt, keskeiset teemat, aikajana, päähenkilöt ja teoreettisten viitekehysten yhteenvedot), ja määrittää tulostiedoston sekä laadunvalintalistan."
"tags":
  - "dokumenttianalyysi"
  - "objektiivinen neutraali"
  - "tietokannan rakenne"
  - "tiedonpoiminta"
  - "tyyliohje"
  - "raportin kirjoittaminen"
  - "rakenteellinen data"
---

# Objektiivisen ja neutraalin tyylin analyysiraportti

## Lukemisen keskipisteet

Lukiessasi jokaista tiedostoa, keskity poimimaan seuraavat tiedot:

- Tiedostopolku ja otsikko
- Päivämäärätiedot
- Mainitut projektien nimet ja toiminnalliset kuvaukset
- Mainitut henkilöt ja heidän roolinsa
- Objektiiviset faktat ja tiedot
- Tarkat tiedot kuten versionumerot, virstanpylväät jne.

**Ohita**: Subjektiiviset arviot, tunneilmaisut, spekulatiivinen sisältö

## Tietokannan rakenne

```
### Tiedostoindeksi
| Tiedostopolku | Otsikko | Päivämäärä |
|---------------|---------|------------|

### Projekti-indeksi
| Projektin nimi | Kuvaus | Liittyvät tiedostot |
|----------------|--------|---------------------|

### Henkilöindeksi
| Henkilö | Rooli | Liittyvät tiedostot |
|---------|-------|---------------------|

### Aikajana
| Päivämäärä | Tapahtuma | Lähdetiedosto |
|------------|-----------|---------------|

### Teoreettinen/Viitekehysindeksi
| Nimi | Ydinajatus | Lähdetiedosto |
|------|------------|---------------|
```

## Tiivistysstrategia

Kun tietokantaa on tarpeen tiivistää:

1. **On säilytettävä**: Tiedostoindeksi (polku+otsikko), projekti-indeksi, henkilöindeksi
2. **Voidaan tiivistää**: Aikajana (säilytä keskeiset solmukohdat), teoreettinen indeksi (säilytä nimi ja lähde)
3. **Voidaan hylätä**: Yksityiskohtaiset kuvaukset, vähämerkityksiset tapahtumat

---

## Tyylin määrittely

Esittele sisältö objektiivisesta ja neutraalista näkökulmasta, välttäen subjektiivisia arvioita ja tunnesävyjä. Korosta faktoja ja tietoja, varmistaen tietojen tarkkuuden ja luotettavuuden.

**Kohderyhmä**: Uudet lukijat, jotka haluavat nopeasti saada käsityksen arkiston kokonaisuudesta; mahdolliset yhteistyökumppanit; sijoittajat
**Kirjoitustyyli**: Ammattimainen, hillitty, neutraali, kuten ansioluetteloa tai CV:tä kirjoitettaisiin
**Tarkoitus**: Auttaa lukijoita ymmärtämään sisällön perustiedot ja keskeiset näkökohdat kokonaisuudessaan, jotta he voivat muodostaa oman arvionsa

## Kiellettyjä asioita

- ❌ Älä sisällytä tunneilmaisuja (kuten "innostavaa", "valitettavasti")
- ❌ Älä tee spekulaatioita (kuten "mahdollisesti", "ehkä", "luultavasti")
- ❌ Älä käytä subjektiivisia arviointisanoja (kuten "erinomainen", "huono", "mielenkiintoinen")
- ❌ Älä arvioi hyvää/huonoa tai paremmuutta
- ❌ Älä käytä ensimmäistä persoonaa

## Vaaditut lukuosiot

### Yleiskatsaus

- Arkiston omistajan esittely (nimi/ID, asema, pääalueet)
- Arkiston sisällön aikaväli
- Pääprojektien luettelo (lyhyt luettelo)

### Projektiesittelyt

Käytä seuraavaa rakennetta jokaiselle pääprojektille:

```markdown
### [Projektin nimi]

- **Alkuperä**: Projektin lähde ja tausta
- **Ydintoiminnot**:
  - Toiminnallisuus 1
  - Toiminnallisuus 2
- **Versionkehitys**: Jos versiohistoriaa on, lyhyt kuvaus
- **Liittyvät tiedostot**: [Artikkelin otsikko](../polku/tiedostoon.md)
```

### Keskeiset teemat

Järjestä sisältö teemojen mukaan:

```markdown
### 1. [Teeman nimi]

- [Artikkelin otsikko1](../polku/tiedostoon1.md): Ydinajatuksen yhteenveto
- [Artikkelin otsikko2](../polku/tiedostoon2.md): Ydinajatuksen yhteenveto
```

### Aikajana

Esitä keskeiset tapahtumat taulukkomuodossa:

```markdown
| Päivämäärä   | Keskeinen tapahtuma         |
| ------------ | --------------------------- |
| VVVV-KK-PP   | Tapahtuman kuvaus (objektiivinen kuvaus) |
```

### Päähenkilöt

Käytä taulukkomuotoa:

```markdown
| Henkilö  | Rooli      | Huomautukset      |
| -------- | ---------- | ----------------- |
| Nimi/ID  | Asema/Suhde | Liittyvät objektiiviset tiedot |
```

### Teoreettisten viitekehysten yhteenvedot

Arkistossa esitetyistä teorioista/viitekehyksistä:

```markdown
### [Viitekehyksen nimi]

- **Ydinajatus**: Yhden lauseen tiivistelmä
- **Keskeiset elementit**: Luettele ydinosa-alueet
- **Matemaattinen ilmaisu**: Jos kaavoja on, listaa ne
```

## Tulostiedosto

`SUMMARY/1-objective.md`

## Laadunvalintalista

- [ ] Ei subjektiivisia arviointisanoja
- [ ] Ei tunneilmaisuja
- [ ] Kaikki linkit osoittavat tiettyihin tiedostoihin
- [ ] Linkkitekstit ovat artikkelien otsikoita
- [ ] Sisältää kaikki vaaditut lukuosiot
- [ ] Aikajana- ja henkilötaulukoiden muotoilu on oikea