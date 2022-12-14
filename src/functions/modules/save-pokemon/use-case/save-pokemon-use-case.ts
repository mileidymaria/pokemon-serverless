import { Pokemon } from "../../../lib/pokemon/model/Pokemon";
import { PokemonRepository } from "../repository/PokeRepository";
import { SavePokemonSnippet } from "../../../lib/pokemon/snippets/SavePokemonSnippet";
import Moment from 'moment';

export class SavePokemonUseCase{

    constructor (){
    }

    async savePokemon(pokemon: Pokemon){
        try{
            await PokemonRepository.getInstance().savePokemon(pokemon);
            const savedPokemonSnippet: SavePokemonSnippet = {
                pokeId: pokemon.pokeId,
                pokeName: pokemon.pokeName,
                attack: pokemon.attack,
                defense: pokemon.defense,
                issues: 'No issues!',
                savedAt: Moment().format()
            };
            console.log(`Snippet of the saved pokemon ${JSON.stringify(savedPokemonSnippet)}`);
            return savedPokemonSnippet;
        }

        catch(err){
            console.error(`Error when saving pokemon ${err.message}`);
        }

        const errorSnippet: SavePokemonSnippet = {
            pokeId: "NO ID",
            pokeName: pokemon.pokeName,
            attack: pokemon.attack,
            defense: pokemon.defense,
            issues: ['Error when saving pokemon']
        };

        return errorSnippet;
    }
}