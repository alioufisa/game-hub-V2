import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {

  return <Grid templateAreas={`"nav nav" "aside main"`}>
    <GridItem area='nav' bg='coral'>Nav</GridItem>
    <GridItem area='aside' bg='gold'>Aside</GridItem>
    <GridItem area='main' bg='dodgerblue'>main</GridItem>
  </Grid>
}

export default App
