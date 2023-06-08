import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardComponent from './GameCardComponent'
import { Genre } from '../hooks/useData'

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
    
    const{ data, error, isLoading } = useGames(selectedGenre)
    const skeletons = [1, 2, 3, 4, 5, 6]
    
  return (
    <>
     {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5 }} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton => 
      <GameCardComponent key={skeleton}>
        <GameCardSkeleton />
      </GameCardComponent>
      )}
        {data.map(game => (
          <GameCardComponent key={game.id}>
            <GameCard game={game} />  
          </GameCardComponent>
      ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid