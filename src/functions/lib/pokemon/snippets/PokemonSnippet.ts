import { Pokemon } from "../model/Pokemon";

export type PokeSnippet = Pick<Pokemon, "pokeId" | "name" | "attack" | "defense"> ;