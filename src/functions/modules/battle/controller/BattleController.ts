import { Response } from "@functions/lib/http-response/model/Response";
import { PokeSnippet } from "../../../lib/pokemon/snippets/PokemonSnippet";
import { BattleUseCase } from "../use-case/battle-use-case";

export class BattleController{

    battleUseCase: BattleUseCase; 

    constructor(battleUseCase: BattleUseCase){
        this.battleUseCase = battleUseCase;
    }

    execute = async (pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet,) => {
        return await new Response(200, JSON.stringify(this.battleUseCase.battle(pokemonOne, pokemonTwo)));;
    }
}