import { DynamoDB } from "aws-sdk";
import { DeletePokemonSnippet } from "../../../lib/pokemon/snippets/DeletePokemonSnippet";
import Moment from 'moment';
import { PokemonId } from "../../../lib/pokemon/snippets/PokemonId";
const POKEMON_TABLE = process.env.POKEMON_TABLE;
const docClient = new DynamoDB.DocumentClient();

export class DeletePokemonRepository{

    constructor(){
    }

    async existsById(id: string, pokeName: string){
        const pokemon = await docClient.get({
            Key: {
                pokeId: id,
                name: pokeName
            },
            TableName: POKEMON_TABLE
        }).promise();

        if(!pokemon){
            return false;
        }

        console.log(`The pokemon for the key ${id}::${pokeName} exists. \n${JSON.stringify(pokemon)}`);
        return true;
    }

    async delete(pokemon: PokemonId){
        if(!await this.existsById(pokemon.pokeId, pokemon.name)){
            const deletePokemonSnippet: DeletePokemonSnippet = {
                pokeId: pokemon.pokeId,
                name: pokemon.name,
                deletedAt: Moment().format(),
                issues: ['Pokemon not found in db!']
            };
            return deletePokemonSnippet;
        }

        await docClient.delete({
            Key:{
                pokeId: pokemon.pokeId,
                name: pokemon.name
            },
            TableName: POKEMON_TABLE
        }).promise();

        const deletePokemonSnippet: DeletePokemonSnippet = {
            pokeId: pokemon.pokeId,
            name: pokemon.name
        }
        return deletePokemonSnippet;
    }
}