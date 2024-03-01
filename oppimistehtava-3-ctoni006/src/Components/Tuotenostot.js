import React from 'react';
import Kortti from './Kortti';



function Tuotenostot(props) {

    return (
        <div style={{
            width: '100%',
            backgroundColor: 'pink',
            marginLeft: '10px'
        }}>
            <Kortti lisaaKoriin={props.lisaaKoriin} lisaaHintaan={props.lisaaHintaan} />
        </div>
    )
}

export default Tuotenostot
