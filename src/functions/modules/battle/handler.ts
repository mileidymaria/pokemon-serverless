import { APIGatewayProxyEvent, Handler, Context } from 'aws-lambda';
import { Response } from '../../lib/http-response/model/Response';
import { PokemonBattle } from '../../lib/pokemon/model/PokemonBattle';
import { BattleController } from './controller/BattleController';
import { IPokeReportRepository } from './repository/IPokeReportRepository';
import { BattleUseCase } from './use-case/battle-use-case';
const localOption = 'local';

module.exports.battle = async (event: APIGatewayProxyEvent, context: Context) => {

    if(!event.body){
        return new Response(400, 'Missing body content!');
    }

    const pokemonBattle: PokemonBattle = JSON.parse(event.body);

    console.log(`The request id is ${context.awsRequestId} and the body is ${pokemonBattle}`);
    const pokeReportRepository = new IPokeReportRepository();
    const battleUseCase = new BattleUseCase(pokeReportRepository)
    return await new BattleController(battleUseCase).execute(pokemonBattle.pokemonOne, pokemonBattle.pokemonTwo);

}