import { useState } from 'react';
import './App.css';

function App() {
  /*VELAT*/
  const [velat, setVelat] = useState([
    {
      nimi: "Henkka",
      summa: 10
    },
    {
      nimi: "Jarppi",
      summa: 20
    },
    {
      nimi: "Masa",
      summa: 30
    }
  ]);

  /*SAATAVAT*/
  const [saatavat, setSaatavat] = useState([
    {
      nimi: "Minna",
      summa: 10
    },
    {
      nimi: "Jonna",
      summa: 20
    },
    {
      nimi: "Maisa",
      summa: 30
    }
  ]);
  
  const [uusiVelkaNimi, setUusiVelkaNimi] = useState("")
  const [uusiVelkaSumma, setUusiVelkaSumma] = useState(0)
  const [uusiSaatavaNimi, setUusiSaatavaNimi] = useState("")
  const [uusiSaatavaSumma, setUusiSaatavaSumma] = useState(0)
  
  const lisaaVelka = () => {
    setVelat([...velat, { nimi: uusiVelkaNimi, summa: uusiVelkaSumma }]);
  }

  const lisaaSaatava = () => {
    setSaatavat([...saatavat, { nimi: uusiSaatavaNimi, summa: uusiSaatavaSumma }]);
  }
  
  const poistaVelka = (index) => {
    let poistaVelkaApu = [...velat];
    //console.log(`poistaVelka indeksi ${index}, velat pituus ${poistaVelkaApu.length}`);
    poistaVelkaApu.splice(index, 1);
    //console.log(`poistaVelka indeksi ${index}, velat pituus ${poistaVelkaApu.length}`);
    setVelat([...poistaVelkaApu]);
  }
  const poistaSaatava = (index) => {
    let poistaSaatavaApu = [...saatavat];
    poistaSaatavaApu.splice(index, 1);
    setSaatavat([...poistaSaatavaApu]);
  }

  const yhteensaVelat = () => {
    let yhteensa = 0;
    let x = [...velat];
    for (let i = 0; i < x.length; i++) {
      yhteensa += Number(x[i].summa);
    }
    return yhteensa;
  }

  const yhteensaSaatavat = () => {
    let yhteensa = 0;
    let x = [...saatavat];
    for (let i = 0; i < x.length; i++) {
      yhteensa += Number(x[i].summa);
    }
    return yhteensa;
  }

  return (
    <div>
      <h1>Vippi appi</h1>
      {/*VELAT */}
      <table>
        <tr><th colspan="3">Velat</th></tr>
        <tr>
          <th>Kenelle</th>
          <th colspan="2">summa</th></tr>
        <tr>
          <td><input
            type="text"
            name="nimi"
            onChange={(e) => { setUusiVelkaNimi(e.target.value) }} /></td>
          <td><input
            type="number"
            name="summa"
            onChange={(e) => { setUusiVelkaSumma(e.target.value) }} /></td>
          <td><button
            type="button"
            onClick={lisaaVelka}>Lisää</button></td>
        </tr>
        {velat.map((velka, indeksi) => {
          return (
            <tr key={indeksi}>
              <td >{velka.nimi}</td>
              <td>{velka.summa}</td>
              <td><button
                type="button"
                onClick={() => { poistaVelka(indeksi); }}>poista</button></td>
            </tr>);
        })}
      </table>
      <h2>Velat yhteensä: {yhteensaVelat()}</h2>
      {/*SAATAVAT */}
      <table>
        <tr><th colspan="3" >Saatavat</th></tr>
        <tr>
          <th>Keneltä</th>
          <th colspan="2">summa</th>
        </tr>
        <tr>
          <td>
            <input type="text" name="nimi" onChange={(e) => { setUusiSaatavaNimi(e.target.value) }} /></td>
          <td>
            <input type="number" name="summa" onChange={(e) => { setUusiSaatavaSumma(e.target.value) }} /></td>
          <td>
            <button type="button" onClick={lisaaSaatava}>Lisää</button></td>
        </tr>
        {saatavat.map((saatava, indeksi) => {
          return (
            <tr key={indeksi}>
              <td>{saatava.nimi}</td>
              <td>{saatava.summa}</td>
              <td>
                <button type="button" onClick={() => { poistaSaatava(indeksi); }}>poista</button></td>
            </tr>
          );
        })}
      </table>
      <h2>Saatavat yhteensä: {yhteensaSaatavat()}</h2>


    </div>
  );
}

export default App;
