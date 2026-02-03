---
"title": "Taiteellisen tunneperäisen tyylin analyysiraportin opas"
"summary": "Tämä asiakirja esittelee yksityiskohtaisesti taiteellisen tunneperäisen tyylin analyysiraportin täydellisen viitekehyksen, mukaan lukien lukemisen keskipisteet, tietokannan rakenteen, tiivistysstrategian, tyylin määrittelyn, perusperiaatteet, vaaditut lukuosiot, kirjoitustekniikat ja tulostusvaatimukset. Se ohjaa, kuinka asiakirjasta poimitaan elementtejä kuten tunneilmaisut, kuvailevat kuvaukset, henkilöhahmot, ja rakennetaan rakenteellinen tietokanta (esim. tiedostoindeksi, kultaiset lauseet -indeksi, tunnejuoksu). Asiakirja korostaa elävän kielen, vertausten ja kuvien käyttöä eläytyvän tunteen luomiseksi. Kohderyhmänä ovat lukijat, jotka pitävät kirjallisesta ilmaisusta ja etsivät tunneyhteyttä. Perusperiaatteisiin kuuluu tunteiden ilmaiseminen tosiasioihin perustuen, sisällön keksimättä jättäminen, ja se tarjoaa täydellisen kirjoitusprosessin runollisesta aloituksesta tunneylennoksiin."
"tags":
  - "taiteellinen analyysi"
  - "tunneperäinen tyyli"
  - "asiakirjaopas"
  - "kirjallinen luominen"
  - "tunneilmaisu"
  - "tietokannan rakenne"
  - "kirjoitustekniikat"
---

# Taiteellisen tunneperäisen tyylin analyysiraportti

## Lukemisen keskipisteet

Lukiessasi jokaista tiedostoa, keskity poimimaan:

-   Tiedostopolku ja otsikko
-   Tunneilmaisut ja tunnevaihtelut
-   Kuvailevat, mielikuvia herättävät kuvaukset
-   Tarttuvat lauseet (voidaan lainata)
-   Henkilöhahmot ja luonteenpiirteet
-   Tarinaelementit (alku, kehitys, käänne, loppu)
-   Kuvat ja vertaukset

**Erityishuomio**: Ensimmäisen persoonan kertomus, tunnesanat, elävät kuvaukset, elämänohjeet

## Tietokannan rakenne

```
### Tiedostoindeksi
| Tiedostopolku | Otsikko | Tunnelataus | Kirjallinen arvo |
|---------------|---------|-------------|------------------|

### Kultaiset lauseet -indeksi (voidaan lainata)
| Alkuperäinen teksti | Tunne | Lähdetiedosto |
|---------------------|-------|---------------|

### Kuvaindeksi
| Kuva | Merkitys | Lähdetiedosto |
|------|----------|---------------|

### Henkilöhahmojen luonnostelumateriaali
| Henkilö | Piirteiden kuvaus | Lähdetiedosto |
|---------|-------------------|---------------|

### Tarinalinjat
| Teema | Alku | Kehitys | Käänne | Loppu | Liittyvä tiedosto |
|-------|------|---------|--------|-------|-------------------|

### Tunnejuoksu
| Aikajakso | Vallitseva tunne | Avaintapahtuma | Lähdetiedosto |
|-----------|------------------|----------------|---------------|
```

## Tiivistysstrategia

Kun tietokantaa on tarpeen tiivistää:

1.  **On säilytettävä**: Tiedostoindeksi, kultaiset lauseet -indeksi, tunnejuoksu
2.  **Voidaan tiivistää**: Kuvaindeksi (säilytä ydinkuvat), henkilöhahmojen luonnostelut (säilytä päähenkilöt)
3.  **Voidaan hylätä**: Toissijaiset tunne-yksityiskohdat

---

## Tyylin määrittely

Herkän kuvauksen ja tunneilmaisun kautta luodaan eläytyvä tunne, jotta lukija kokee sisällön tunteet ja tunnelman.

**Kohderyhmä**: Lukijat, jotka pitävät kirjallisesta ilmaisusta; lukijat, jotka etsivät tunneyhteyttä
**Kirjoitustyyli**: Runollinen, tunneperäinen, mielikuvia herättävä
**Tarkoitus**: Herättää yhteisymmärrystä ja tuntereaktioita, tehdä sisällöstä tarttuvampi

## Perusperiaatteet

-   ✅ Käytä elävää kieltä ja kuvailevia vertauksia
-   ✅ Luo mielikuvia ja tunnelmaa
-   ✅ Kerro tarina, johdata lukija tilanteeseen
-   ✅ Ilmaise tunteita, mutta perustuen sisällön tosiasioihin
-   ❌ Älä keksi sisältöä irtaantuen alkuperäisestä tekstistä

## Vaaditut lukuosiot

### Johdanto (runollinen aloitus)

Aloita tunnelmaa luovalla kielellä, aseta tunnelataus

```markdown
Koodin ja tekstin kietoutumassa digitaalisessa metsässä, matkailija tallentaa jälkiään...
```

### Teemaluvut

Jokainen teema avataan kertovalla kappaleella:

```markdown
## [Runollinen luvun otsikko]

[Kuvaile teemasisältöä tarinallisesti, yhdistä tunteet ja kuvat]

Kun [henkilö] kirjoitti [sisällön], oli kuin näkisi [kuvakuvaus]...

> "[Lainaa tarttuva lause alkuperäisestä tekstistä]"
> —— [Lähde](../polku/tiedostoon.md)

[Jatka kertomusta, yhdistä seuraavaan kohtaan]
```

### Henkilöhahmojen luonnostelut

Kuvaile henkilöhahmot kirjallisella kielellä

### Ajan virta

Kuvaile aikajanalla tapahtuvia muutoksia kertovalla tavalla

### Lopetus (tunneylennoksi)

Yhteenveto runollisella lopetuksella, jättäen jälkimakua

```markdown
Tämä ei ole vain koodivarasto, vaan ajattelijan jälki digiajalla...
```

## Kirjoitustekniikat

-   Käytä vertauksia: Tee abstrakteista käsitteistä konkreettisia
-   Käytä kuvia: Luo visuaalisia mielikuvia
-   Käytä rytmiä: Vaihtele pitkiä ja lyhyitä lauseita, luo rytmiä
-   Lainaa alkuperäistä tekstiä: Valitse tarttuvia lauseita

## Tulostustiedosto

`SUMMARY/5-artistic.md`

## Laadun tarkistuslista

-   [ ] Kieli on mielikuvia herättävää
-   [ ] Tunneilmaisu on vilpitöntä
-   [ ] Alkuperäistekstin lainaukset ovat asianmukaisia
-   [ ] Kertomus on johdonmukainen ja sujuva
-   [ ] Kaikki linkit ovat toimivia