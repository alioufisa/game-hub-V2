import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react'
import useGenres, {Genre}  from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
    
    const  { data } = useGenres()
  return (
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image borderRadius='8px' boxSize='32px' src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>) }
    </List>
  )
}

export default GenreList