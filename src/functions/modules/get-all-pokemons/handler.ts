import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { GetAllPokemonsController } from "./controller/get-all-pokemons-controller";
import { IGetAllPokemonsController } from "./controller/get-all-pokemons-controller.interface";
import { GetAllPokemonUseCase } from "./use-case/get-all-pokemons-use-case";

const getAllPokemonsUseCase = new GetAllPokemonUseCase();
const getAllPokemonsController: IGetAllPokemonsController = new GetAllPokemonsController(getAllPokemonsUseCase);

//@ts-ignore
module.exports.getAll = async (event: APIGatewayProxyEvent, context: Context) => {
    console.log(event);
    console.log(`Returning all pokemon's requested by ${context.awsRequestId}`);
    
    if(!event.queryStringParameters) {
        return await getAllPokemonsController.getAll();
    }

    if(event.queryStringParameters.pageSize && event.queryStringParameters.lastItem) {
        return await getAllPokemonsController.getAll(Number(event.queryStringParameters.pageSize), event.queryStringParameters.lastItem);
    }

    return await getAllPokemonsController.getAll(20, event.queryStringParameters.lastItem);
}