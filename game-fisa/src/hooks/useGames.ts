// import React, { useEffect, useState } from 'react'
// import apiClient from '../services/api-client';



// interface Game {
//     id: number,
//     name: string
// }

// interface FetchGamesResponse {
//     count: number;
//     results: Game[]
// }

// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([])
//     const [error, setError] = useState('')

//     useEffect(() => {

//         const controller = new AbortController();

//         apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
//      .then(res => setGames(res.data.results))
//      .catch(err =>{
//         if (err instanceof CanceledError) return;
//         setError(error.message)}
//         )

//      return () => {
//         controller.abort()
//       }
//     }, [])
//     return { games, error }
// }


// export default useGames

// import React, { useEffect, useState } from 'react';
// import apiClient from '../services/api-client';

// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const controller = new AbortController();

//     apiClient
//       .get<FetchGamesResponse>('/games', { signal: controller.signal })
//       .then((res) => setGames(res.data.results))
//       .catch((err) => {
//         if (err.name !== 'AbortError') return; // Request was aborted, no need to handle the error
//         setError('Failed to fetch games. Please try again later.');
//       });

//     return () => {
//       controller.abort(); // Abort the request if the component is unmounted
//     };
//   }, []);

//   return { games, error };
// };

// export default useGames;


import useData, { Genre } from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform}[];
  metacritic: number
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (selectedGenre  : Genre | null, SelectedPlatform: Platform | null) => useData<Game>('/games', { params: { 
  genres: selectedGenre?.id, 
  platforms: SelectedPlatform?.id
} } , 
[selectedGenre?.id, SelectedPlatform?.id]);

export default useGames;
