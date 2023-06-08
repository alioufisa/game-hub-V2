import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useData'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return <Grid templateAreas={{
    base: `"nav" "main"`, 
    lg:`"nav nav" "aside main"`
  }}
  templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
  }}
  >
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside'paddingLeft='3px' paddingY='5px'>
        <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
      <GameGrid SelectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
    </GridItem>
  </Grid>
}

export default App
