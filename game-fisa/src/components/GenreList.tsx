import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react'
import { useState } from 'react';
import useGenres, {Genre}  from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'



interface Props {
    onSelectedGenre: (genre: Genre) => void
}
const GenreList = ({onSelectedGenre}: Props) => {
    
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
            <Button onClick={()=> onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
        </ListItem>) }
    </List>
  )
}

export default GenreList


// import { useState } from 'react';
// import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react';
// import useGenres, { Genre } from '../hooks/useGenres';
// import getCroppedImageUrl from '../services/image-url';

// interface Props {
//   onSelectedGenre: (genre: Genre) => void;
// }

// const GenreList = ({ onSelectedGenre }: Props) => {
//   const { data, isLoading, error } = useGenres();
//   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

//   if (error) return null;
//   if (isLoading) {
//     return <Spinner size='xl' />;
//   }

//   const handleGenreSelection = (genre: Genre) => {
//     setSelectedGenre(genre);
//     onSelectedGenre(genre);
//   };

//   const filteredGames = selectedGenre ? data.filter(genre => genre.games.filter(game => game.genre === selectedGenre.slug)) : data;

//   return (
//     <List>
//       {filteredGames.map((genre) => (
//         <ListItem key={genre.id} paddingY='5px'>
//           <HStack>
//             <Image borderRadius='8px' boxSize='32px' src={getCroppedImageUrl(genre.image_background)} />
//             <Button fontSize='lg' variant='link' onClick={() => handleGenreSelection(genre)}>
//               {genre.name}
//             </Button>
//           </HStack>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default GenreList;
