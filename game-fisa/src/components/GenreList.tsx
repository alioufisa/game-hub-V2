import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react'
import { useState } from 'react';
import useGenres, {Genre}  from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'



interface Props {
    onSelectedGenre: (genre: Genre) => void
}
const GenreList = ({onSelectedGenre}: Props) => {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const  { data, isLoading, error } = useGenres()
    if(error) return null
    if (isLoading){
        return <Spinner size='xl' />
    }

    const handleGenreSelection = (genre: Genre) => {
        setSelectedGenre(genre);
        onSelectedGenre(genre);
      };

  return (
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'
        backgroundColor={selectedGenre?.id === genre.id ? 'yellow.500' : undefined} // Highlighting the selected genre
        >
            <HStack>
                <Image borderRadius='8px' boxSize='32px' src={getCroppedImageUrl(genre.image_background)}/>
                <Button
              onClick={() => handleGenreSelection(genre)}
              fontSize='lg'
              variant='link'
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : undefined} // Bold font for selected genre
            >{genre.name}</Button>
            </HStack>
        </ListItem>) }
    </List>
  )
}

export default GenreList
