import { useState } from 'react';
import './App.css';

function App() {
  // muuttujat sekä apumuuttuja
  const [pituus,setPituus] = useState()
  const [paino,setPaino] = useState()
  const [teksti, setTeksti] = useState()
  const [vari,setVari] = useState("black")
  const [tausta, setTausta] = useState()
  // käytin muokkaamiseen apu muuttujaa 
  const apuPainoindeksi = paino / pituus / pituus;
  const painoindeksi = apuPainoindeksi.toFixed(2);
  
  // laskenapin painallus funktio
  const laskeNappi = () => {
    // muutetaan tekstiä sen mukaan mitä painoindeksi näyttää if lauseilla
    if (painoindeksi < 15) {
      setVari("red");
      setTausta("pink");
      setTeksti(`Painoindeksi on: ${painoindeksi} Sairaanloinen alipaino`)
    }
    if (painoindeksi > 15 & painoindeksi < 17) {
      setVari("orange");
      setTausta("yellow");
      setTeksti(`Painoindeksi on: ${painoindeksi} merkittävä alipaino`);
    }
    if (painoindeksi > 17 & painoindeksi < 18.5) {
      setVari("lightblue");
      setTausta("blue");
      setTeksti(`Painoindeksi on: ${painoindeksi} normaalia alhaisempi paino`);
    }
    if (painoindeksi > 18.5 & painoindeksi < 25) {
      setVari("green");
      setTausta("lightgreen");
      setTeksti(`Painoindeksi on: ${painoindeksi} Normaali paino`);
    }
    if (painoindeksi > 25 & painoindeksi < 30) {
      setVari("lightblue");
      setTausta("blue");
      setTeksti(`Painoindeksi on: ${painoindeksi} Lievä ylipaino`);
    }
    if (painoindeksi > 30 & painoindeksi < 35) {
      setVari("salmon");
      setTausta("cyan");
      setTeksti(`Painoindeksi on: ${painoindeksi} merkittävä ylipaino`);
    }
    if (painoindeksi > 35 & painoindeksi < 40) {
      setVari("orange");
      setTausta("yellow");
      setTeksti(`Painoindeksi on: ${painoindeksi} vaikea ylipaino`);
    }
    if (painoindeksi > 40) {
      setVari("red");
      setTausta("pink");
      setTeksti(`Painoindeksi on: ${painoindeksi} sairaanloinen ylipaino`);
    }
  }

  // palautus
  // divin tyyli on määritelty erillisessä app.css tiedostossa, mutta muutokset ovat inlinenä en osannut viitata css tiedostoon
  return (
    <div className="App">
      <h1>Painoindeksilaskuri</h1>
      <input type="text" onChange={(e)=>{setPituus(e.target.value/100)}} placeholder="Anna Pituutesi sentteinä.." /><br/>
      <input type="text" onChange={(e)=>{setPaino(e.target.value)}} placeholder="Anna Painosi kiloina.."/><br/>
      <button onClick={laskeNappi}>Laske painoindeksi</button>
  
      <div className="tulostus" style={{color: (vari), backgroundColor: (tausta)}}>
        {teksti}
      </div>
    </div>
  );
}

export default App;
/*

Tämä vain apuna, että muistan tarvittavat raja-arvot kopioitu sivulta, jonne oli tehtävänannossa linkki.
Määritelmä

Painoindeksi=paino(kg)÷pituus(m)÷pituus(m)

alle 15 	sairaalloinen alipaino
15 - 17 	merkittävä alipaino
17 - 18,5 	normaalia alhaisempi paino
18,5 - 25 	normaali paino
25 - 30 	lievä ylipaino
30 - 35 	merkittävä ylipaino
35 - 40 	vaikea ylipaino
yli 40 	sairaalloinen ylipaino 
*/
