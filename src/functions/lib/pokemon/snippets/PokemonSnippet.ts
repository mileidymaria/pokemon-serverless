import { Pokemon } from "../model/Pokemon";

export type PokeSnippet = Pick<Pokemon, "pokeId" | "pokeName" | "attack" | "defense"> ;