---
"title": "Tekoälyn analyysiraportin luonnin perussäännöt"
"summary": "Tämä asiakirja tarjoaa perussäännöt tekoälyn analyysiraportin luomiseen, korostaen, että asiakirjojen lukemisen prosessia on noudatettava tiukasti. Prosessi sisältää viisi vaihetta: tiedostolistan hankinta, erittäin lukeminen ja yhteenvetojen tekeminen, kontekstin hallinta, täydellisyyden varmistus ja raportin luominen. Keskeisiä periaatteita ovat kaikkien tiedostojen yksitellen lukeminen, tosiasioihin perustuminen, viittauslinkkien standardointi ja ajan painotuksen huomioiminen. Yleiset säännöt edellyttävät, että raportti alkaa tietyllä muodolla, tulostetaan määrättyyn hakemistoon, ja kieltävät raportin luomisen ennen kaikkien tiedostojen lukemista tai minkään tiedoston ohittamisen."
"tags":
  - "Tekoälyanalyysi"
  - "Raportin luonti"
  - "Asiakirjojen lukeminen"
  - "Säännöt"
  - "Markdown"
  - "Tosiasioihin perustuminen"
  - "Viittausstandardit"
  - "Prosessinhallinta"
---

# Tekoälyn analyysiraportin luonti - Perussäännöt

## Asiakirjojen lukemisen prosessi (on noudatettava tiukasti)

### Keskeiset periaatteet

Tämä arkisto voi sisältää satoja tai tuhansia Markdown-tiedostoja. Sinun on **luettava jokainen tiedosto yksitellen**, etkä saa ohittaa yhtäkään.
Suuren tiedostomäärän käsittelemiseksi käytetään **asteittaista lukemisen ja yhteenvetojen tekemisen** strategiaa.

### Vaihe 1: Hanki täydellinen tiedostolista

1. Suorita `npx czon@latest ls-files` saadaksesi kaikki Markdown-tiedostot
2. Tallenna tiedostojen kokonaismäärä N
3. Tallenna tiedostolista luettavaksi jonoksi

### Vaihe 2: Erittäin lukeminen ja yhteenvetojen tekeminen

Käsittele tiedostot erissä. Suositellaan 10-20 tiedoston eriä, mutta voit säätää erän kokoa tiedostojen koon ja monimutkaisuuden mukaan.

**Jokaiselle erälle:**

1. **Lue**: Käytä Read-työkalua lukemaan tämän erän jokaisen tiedoston täydellinen sisältö yksitellen
2. **Poimi**: Poimi asiaankuuluvaa tietoa **nykyisen tyylin painopisteiden** mukaisesti (katso alla oleva tyyliohje)
3. **Erän yhteenveto**: Järjestä tämän erän poimitut tiedot rakenteelliseksi yhteenvedoksi
4. **Kumuloitu**: Yhdistä erän yhteenveto "tietokantaan" (tietokannan rakenne on alla olevassa tyyliohjeessa)

### Vaihe 3: Kontekstin hallinta

Kun konteksti lähestyy rajaa:

1. **Pakkaa tietokanta**: Pakkaa tietokanta **nykyisen tyylin pakkausstrategian** mukaisesti (katso alla oleva tyyliohje)
2. **Säilytä indeksi**: Riippumatta pakkauksesta, kaikkien tiedostojen polkujen ja otsikoiden indeksi on säilytettävä
3. **Jatka lukemista**: Käytä pakattua tietokantaa käsitelläksesi jäljellä olevat tiedostot

### Vaihe 4: Täydellisyyden varmistus

Ennen raportin luomista on varmistettava:

1. Kaikki N tiedostoa tiedostolistassa on käsitelty
2. Tietokanta sisältää perustiedot jokaisesta tiedostosta (vähintään polun ja otsikon)

**Jos havaitaan puutteita**: Palaa vaiheeseen 2 käsitelläksesi puuttuvat tiedostot.

### Vaihe 5: Raportin luominen

Vasta kun kaikki edellä mainitut vaiheet on suoritettu, voit aloittaa raportin luomisen.

### Kiellettyä toimintaa

- ❌ Älä aloita raportin luomista ennen kuin olet lukenut kaikki tiedostot
- ❌ Älä ohita yhtäkään tiedostoa, riippumatta tiedostojen määrästä
- ❌ Älä väitä "ymmärtäväsi kokonaiskuvan" pelkästään osan tiedostoja lukemalla
- ❌ Älä keksi tietokantaan olemattomia tiedostoja tai sisältöä

---

## Yleiset säännöt

### 1. Tosiasioihin perustumisen periaate

- Muista aina perustaa sisältö tosiasioihin, äläkä esitä tosiasioista irrallaan olevia väitteitä
- Kaikkien näkemysten on oltava perusteltuja alkuperäisellä tekstillä
- Älä keksi olemattomia sisältöjä

### 2. Viittauslinkkien standardointi

- Kun viittaat alkuperäiseen linkkiin, varmista, että linkki on toimiva
- **Linkitä aina tiettyihin Markdown-tiedostoihin**, älä linkitä hakemistoihin
- **Linkin tekstin tulisi olla vastaava otsikko**, ei tiedostonimi
- Koska generoidaan SUMMARY-hakemistoon, käytä viittauksissa suhteellisia polkuja, jotka alkavat `../`

**Oikea esimerkki**:

```markdown
[Pääoman pitkä sota: Yksityissijoittajan strategia luokkaylitykseen](../INSIGHTS/6.md)
[Luomisesta jakamiseen – AI-Natiivisen sisällön moottorin rakentaminen](../INSIGHTS/4.md)
```

**Väärä esimerkki**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← käytetty tiedostonimeä otsikon sijaan
[Pääoman pitkä sota](../INSIGHTS/) ← linkitetty hakemistoon
```

### 3. Ylätunnisteen muoto

Jokaisen raportin on alettava seuraavalla muodolla:

```markdown
# [Raportin otsikko]

**Tekoälyn analyysiaika**: VVVV-KK-PP
**Huom.**: Tämän raportin on luonut tekoäly, sisältö on vain viitteellistä.

---
```

### 4. Ajan painotus

- Ota huomioon aikaväli ja anna korkeampi painoarvo uusimmille artikkeleille
- Älä kuitenkaan jätä huomiotta aikaisempia tärkeitä sisältöjä

### 5. Tulostussijainti

- Kaikki raportit generoidaan hakemistoon `SUMMARY/`
- Tiedostot nimetään määrätyllä muodolla