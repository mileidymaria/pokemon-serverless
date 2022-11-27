import { Response } from "../../../lib/http-response/model/Response";
import { GetAllPokemonUseCase } from "../use-case/get-all-pokemons-use-case";
import { IGetAllPokemonsController } from "./get-all-pokemons-controller.interface";

export class GetAllPokemonsController implements IGetAllPokemonsController{

    private getAllPokemonUseCase: GetAllPokemonUseCase;

    constructor(getAllPokemonUseCase: GetAllPokemonUseCase){
        this.getAllPokemonUseCase = getAllPokemonUseCase;
    }

    async getAll(pageSize?: number, lastItem?) {
        const pokemonList = await this.getAllPokemonUseCase.getAll(pageSize, lastItem);
        return new Response(200, JSON.stringify(pokemonList));
    }

}