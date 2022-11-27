import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { PokemonId } from "../../lib/pokemon/snippets/PokemonId";
import { DeletePokemonUseCase } from "./use-case/delete-pokemon-use-case";
import { IDeletePokemonController } from "./controller/delete-pokemon-controller.interface";
import { DeletePokemonController } from "./controller/delete-pokemon-controller";
import { Response } from "../../lib/http-response/model/Response";

const deletePokemonUseCase = new DeletePokemonUseCase();
const deletePokemonController: IDeletePokemonController = new DeletePokemonController(deletePokemonUseCase);

//@ts-ignore
module.exports.delete = async (event: APIGatewayProxyEvent, context: Context) => {
    if(!event.body){
        return new Response(400, 'No key for delete from DB!');
    }

    console.log(`Pokemon to be deleted ${event.body}`);
    const input = JSON.parse(event.body);

    const pokemon: PokemonId = {
        pokeId: input.pokeId,
        name: input.name
    }

    return await deletePokemonController.delete(pokemon);
}