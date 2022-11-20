import { PokeSnippet } from "../snippets/PokemonSnippet";

export class PokemonBattle{
    pokemonOne: PokeSnippet;
    pokemonTwo: PokeSnippet;

    constructor(pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet){
        this.pokemonOne = pokemonOne;
        this.pokemonTwo = pokemonTwo;
    }
}