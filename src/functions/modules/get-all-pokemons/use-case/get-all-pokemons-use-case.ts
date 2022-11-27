import { GetAllPokemonsRepository } from "../repository/get-all-pokemons-repository";

export class GetAllPokemonUseCase{
    private getAllPokemonRepository: GetAllPokemonsRepository;
    constructor(){
        this.getAllPokemonRepository = new GetAllPokemonsRepository();
    }

    async getAll(pageSize: number, lastItem?){
        return await this.getAllPokemonRepository.getAll(pageSize, lastItem);
    }
}