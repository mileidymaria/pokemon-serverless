import { Pokemon } from "../../../lib/pokemon/model/Pokemon";
import { Response } from "../../../lib/http-response/model/Response"

export interface ISavePokemonController{
    save(pokemon: Pokemon): Promise<Response>;
}