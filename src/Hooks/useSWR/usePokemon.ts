import useSWR from "swr";

export const usePokemon = (value: string) =>
  useSWR(`https://pokeapi.co/api/v2/pokemon/${value}`);
