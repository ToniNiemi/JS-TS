import React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

import Verkkokauppaheader from './Components/Verkkokauppaheader';
import Verkkokauppafooter from './Components/Verkkokauppafooter';
import Tuotenostot from './Components/Tuotenostot';
import Kirjautuminen from './Components/Kirjautuminen';
import Pikaostoskori from './Components/Pikaostoskori';




function App() {
  const [ostoskori, setOstoskori] = useState(0);
  const [yhteishinta, setYhteishinta] = useState(0)

  const lisaaOstoskoriin = () => {
    setOstoskori(ostoskori + 1);
  }
  const lisaaYhteishintaan = (hinta) => {
    setYhteishinta(yhteishinta + hinta);
  }

  return (
    <Grid container spacing={1}>
      <Verkkokauppaheader>Hauskoja T-paitoja</Verkkokauppaheader>
      <Grid item xs={10} style={{ marginTop: '20px' }}>
        <Tuotenostot lisaaKoriin={lisaaOstoskoriin} lisaaHintaan={lisaaYhteishintaan}>Tuotteet</Tuotenostot></Grid>
      <Grid item xs={2}>
        <Pikaostoskori kori={ostoskori} hinta={yhteishinta}>Ostoskori</Pikaostoskori>
        <Kirjautuminen>Kirjautuminen</Kirjautuminen>
      </Grid>

      <Verkkokauppafooter>Footer</Verkkokauppafooter>
    </Grid>
  );
}

export default App;

/*Sovelluksen perusvaatimukset (2 pistettä):

    Sovellus koostuu (App-komponentin lisäksi) vähintään seuraavista komponenteista:

        Kirjautuminen: kaksi input-kenttää (tunnus ja salasana) ja painonappi "Kirjaudu"
        Pikaostoskori: oletuksena otsikko ja teksti "Ostoskorissa ei ole tuotteita."

    Kunkin tuotteen yhteydessä on painonappi "Lisää ostoskoriin". 
    Napin painaminen muuttaa pikaostoskorissa olevan tekstin muotoon "Ostoskorissa on n tuotetta, 
    loppusumma xx e". Tuotteiden määrä ja loppusumma tekstissä määräytyy klikattujen tuotteiden mukaan.
    Kun ostoskorissa on yksikin tuote, pikaostoskori-komponenttiin tulee näkyviin painonappi "Tilaa tuotteet".
    Napin painaminen avaa ainoastaan selaimen oman alert-ilmoituksen "Jatketaan tilaukseen...". 
    Varsinaista tilausprosessia ei tarvitse käsitellä tämän kummemmin.

Lisävaatimuksia sovellukselle (1 lisäpiste):

    Kun käyttäjä syöttää kirjautumiseen tunnuksen "testi" ja salasanan "testi", 
    vaihtuu komponentin sisällöksi teksti "Olet kirjautunut sisään tunnuksella: testi" 
    ja sen alle painonappi "Kirjaudu ulos". Uloskirjautuminen palauttaa sisällön input-kenttiin jne. 
    Huom! Tarkoituksena ei ole tehdä aitoa kirjautumista session hallintoineen,  "dummy"-versio riittää.
    Onnistunut kirjautuminen aiheuttaa kaikkien tuotteiden hintaan 20 prosentin alennuksen. 
    Alkuperäinen ja alennettu hinta näkyvät tuotteiden yhteydessä. Hinnat päivittyvät myös ostoskoriin. */