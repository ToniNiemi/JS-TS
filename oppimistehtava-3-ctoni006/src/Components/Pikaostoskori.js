import React from 'react';
import { useState, useEffect } from 'react'
function Pikaostoskori(props) {
    const [ostosKorissa, setOstosKorissa] = useState(false)
    useEffect(() => {

        if (props.kori) {
            setOstosKorissa(true);
        } else {
            setOstosKorissa(false);
        }

    }, [props.kori]);
    return (
        <div style={{
            width: '100%',
            height: 'fit-content',
            backgroundColor: 'lightblue'
        }}>
            <p>{props.children}</p>
            <div id="pikaostoskor;i">Ostoskorissa: {props.kori} tuotetta</div>
            <div>Hinta yhteensä: {props.hinta} €</div>
            <button
                disabled={!ostosKorissa}
                onClick={
                    function () { alert('Jatketaan tilaukseen...'); }
                }>Tilaa tuote</button>
        </div>
    )
}

export default Pikaostoskori
