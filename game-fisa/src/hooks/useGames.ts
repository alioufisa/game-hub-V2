import { GameQuery } from '../App';
import useData, { Genre } from './useData';

export interface Platform {
  id: string | number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform}[];
  metacritic: number;
  rating_top: number
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
  ordering: gameQuery.sortOrder,
  search: gameQuery.searchText
} } , 
[gameQuery]);

export default useGames;
