import { Pokemon } from "../../../lib/pokemon/model/Pokemon";
import { DynamoDB } from "aws-sdk";
const POKEMON_TABLE = process.env.POKEMON_TABLE;
const docClient = new DynamoDB.DocumentClient();

export class PokemonRepository{
    private static instance: PokemonRepository = new PokemonRepository();

    private constructor(){
    }

    static getInstance(){
        return this.instance;
    }

    async savePokemon(pokemon: Pokemon){
        console.log(`REPOSITORY STAGE :: The pokemon to be saved => ${JSON.stringify(pokemon)}`);
        return docClient.put({
            TableName: POKEMON_TABLE,
            Item: pokemon
        }).promise();
    }
}