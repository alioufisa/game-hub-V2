import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react'
import useGenres, {Genre}  from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
    
    const  { data, isLoading, error } = useGenres()
    if(error) return null
    if (isLoading){
        return <Spinner size='xl' />
    }
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