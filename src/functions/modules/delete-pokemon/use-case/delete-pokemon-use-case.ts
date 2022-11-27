import { PokemonId } from "../../../lib/pokemon/snippets/PokemonId";
import { DeletePokemonRepository } from "../repository/delete-pokemon-repository";

export class DeletePokemonUseCase{

    private repository: DeletePokemonRepository;

    constructor(){
        this.repository = new DeletePokemonRepository();
    }

    async delete (pokemon: PokemonId){
        return await this.repository.delete(pokemon);
    }
}