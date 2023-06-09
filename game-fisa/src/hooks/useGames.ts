import { GameQuery } from '../App';
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

const useGames = (
  gameQuery: GameQuery
) => useData<Game>('/games', { params: { 
  genres: gameQuery.genre?.id, 
  platforms: gameQuery.platform?.id,
  ordering: gameQuery.sortOrder
} } , 
[gameQuery]);

export default useGames;
