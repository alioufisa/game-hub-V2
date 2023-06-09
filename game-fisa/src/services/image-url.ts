import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage

    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl

// import { Box, Image } from '@chakra-ui/react';

// interface Props {
//   imageUrl: string;
//   width: number;
//   height: number;
// }

// const getCroppedImageUrl = (imageUrl: string, width: number, height: number): string => {
//   const croppedUrl = `${imageUrl}/crop/${width}/${height}`;
//   return croppedUrl;
// };

// const GameImage: React.FC<Props> = ({ imageUrl, width, height }) => {
//   const croppedImageUrl = getCroppedImageUrl(imageUrl, width, height);

//   return (
//     <Box>
//       <Image src={croppedImageUrl} alt="Game" />
//     </Box>
//   );
// };

// export default GameImage;

// const getCroppedImageUrl = (url: string): string => {
//     const index = url.indexOf('media/') + 'media/'.length;
//     return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
//   };
  
//   export default getCroppedImageUrl;
  