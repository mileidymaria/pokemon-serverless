import { Response } from "../../../lib/http-response/model/Response";
import { PokemonId } from "../../../lib/pokemon/snippets/PokemonId";

export interface IDeletePokemonController{
    delete(pokemon: PokemonId): Promise<Response>;
}