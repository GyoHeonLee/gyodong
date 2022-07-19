import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";
import List from "../components/List";
import { fetcher } from "../Hooks/useSWR/usePokemon";

interface pokemonList {
  name: string;
  url: string;
}
interface pokemonLists extends Array<pokemonList> {}
interface pokemonData {
  count: number;
  next: string;
  previous: string;
  results: pokemonLists;
}

const Pokemon = () => {
  const pokemonGetkey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (pageIndex && !previousPageData.results.length) return null;
    return `https://pokeapi.co/api/v2/pokemon?offset=${
      pageIndex * 10
    }&limit=10`;
  };

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    pokemonGetkey,
    fetcher
  );

  const pokemonResults = data ? [].concat(data[results]) : [];

  return (
    <div>
      <List dataSource={pokemonResults} />
      <button onClick={() => setSize((prev) => prev + 1)}>load More</button>
    </div>
  );
};

export default Pokemon;
