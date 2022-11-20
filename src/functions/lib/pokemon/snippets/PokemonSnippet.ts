import { Pokemon } from "../model/Pokemon";

export type PokeSnippet = Pick<Pokemon, "id" | "name" | "attack" | "defense"> ;