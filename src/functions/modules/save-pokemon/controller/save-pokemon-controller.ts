import { Pokemon } from "../../../lib/pokemon/model/Pokemon";
import { Response } from "../../../lib/http-response/model/Response"
import { ISavePokemonController } from "./save-pokemon-controller.interface";
import { SavePokemonUseCase } from "../use-case/save-pokemon-use-case";

export class SavePokemonController implements ISavePokemonController{
    private savePokemonUseCase: SavePokemonUseCase;

    constructor(savePokemonUseCase: SavePokemonUseCase){
        this.savePokemonUseCase = savePokemonUseCase;
    }

    async save(pokemon: Pokemon): Promise<Response>{
        const savedResult = await this.savePokemonUseCase.savePokemon(pokemon);
        return new Response(200, JSON.stringify(savedResult));
    }

}