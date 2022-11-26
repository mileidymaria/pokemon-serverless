import { PokeSnippet } from "./PokemonSnippet";

type ResponseSnippet = {
    savedAt?: string;
    issues: string[] | string;
}

export type SavePokemonSnippet = PokeSnippet & ResponseSnippet;