import Paidat from './Paidat.json';
import Grid from '@mui/material/Grid';

function Kortti(props) {
    //console.log(props);
    return (
        <Grid container spacing={2} >
            {Paidat.map((Paita, index) => {
                return (
                    <Grid item xs={3} key={index} style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        marginLeft: '25px',
                        borderRadius: '10px',
                        backgroundColor: 'white'
                    }}>
                        <h3>{Paita.paitaNimi}</h3>
                        <img width="100%" height="300px" src={Paita.Kuva} alt="" />
                        <button onClick={() => {
                            props.lisaaKoriin();
                            props.lisaaHintaan(Paita.Hinta);
                        }}>Siirrä ostoskoriin</button>
                        <p>Hinta: {Paita.Hinta} €</p>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Kortti
