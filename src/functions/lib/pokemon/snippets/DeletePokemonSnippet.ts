import { PokemonId } from "./PokemonId";

type ResponseSnippet = {
    deletedAt?: string;
    issues?:string[];
}

export type DeletePokemonSnippet = PokemonId & ResponseSnippet;