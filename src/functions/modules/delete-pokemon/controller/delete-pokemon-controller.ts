import { Response } from "../../../lib/http-response/model/Response";
import { PokemonId } from "../../../lib/pokemon/snippets/PokemonId";
import { DeletePokemonUseCase } from "../use-case/delete-pokemon-use-case";
import { IDeletePokemonController } from "./delete-pokemon-controller.interface";

export class DeletePokemonController implements IDeletePokemonController{
    private deletePokemonUseCase: DeletePokemonUseCase;
    
    constructor (deletePokemonUseCase: DeletePokemonUseCase){
        this.deletePokemonUseCase = deletePokemonUseCase;
    }

    async delete (pokemon: PokemonId): Promise<Response>{
        const deletePokemonSnippet = await this.deletePokemonUseCase.delete(pokemon);
        return new Response(200, JSON.stringify(deletePokemonSnippet));
    }
}