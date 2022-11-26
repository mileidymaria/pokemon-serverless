import { APIGatewayProxyEvent, Context, Handler } from 'aws-lambda';
import { SavePokemonUseCase } from './use-case/save-pokemon-use-case';
import { ISavePokemonController } from './controller/create-pokemon-controller.interface';
import { SavePokemonController } from './controller/create-pokemon-controller';
import { Pokemon } from '../../lib/pokemon/model/Pokemon';
import { Response } from '../../lib/http-response/model/Response';


const savePokemonUseCase = new SavePokemonUseCase();
const savePokemonController: ISavePokemonController = new SavePokemonController(savePokemonUseCase);

export const save: Handler = async (event: APIGatewayProxyEvent, context: Context) => {
    if(!event.body){
        console.error("No pokemon to save!");
        return new Response(400, "No pokemon to save!");
    }
    console.log(`Request id is ${context.awsRequestId} and pokemon is ${event.body}`);
    const inputBody = JSON.parse(event.body);
    try {
        const pokemon = new Pokemon(inputBody.name, inputBody.pokeType, inputBody.attack, inputBody.defense); 
        console.log(`The pokemon to be saved => ${JSON.stringify(pokemon)}`);
        return await savePokemonController.save(pokemon);
    }
    catch(err){
        console.error(`Error when processing request. ${err.message}`);
    }
    return new Response(500, "Wasn't possible to save pokemon!");
}

