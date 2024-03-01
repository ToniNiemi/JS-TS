import React from 'react';
//import { useState } from "react";
import Header from './Components/header';
import Main from './Components/Main';
import Footer from './Components/footer';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid>
      <Header>Aurinkojärven lomamökit</Header>
      <Main />
      <Footer>
        Aatu Aurinkoinen<br />
        Aurinkojärventie 888<br />
        99980 UTSJOKI<br />
        Made by: &copy; Toni Niemi
      </Footer>
    </Grid>
  );
}

export default App;
