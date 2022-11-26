import { Response } from "../../../lib/http-response/model/Response";
import { PokeSnippet } from "../../../lib/pokemon/snippets/PokemonSnippet";
import { BattleUseCase } from "../use-case/battle-use-case";

export class BattleController{

    battleUseCase: BattleUseCase; 

    constructor(battleUseCase: BattleUseCase){
        this.battleUseCase = battleUseCase;
    }

    execute = async (pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet,) => {
        const battleReport = await this.battleUseCase.battle(pokemonOne, pokemonTwo);
        return new Response(200, JSON.stringify(battleReport));;
    }
}