import { Response } from "../../../lib/http-response/model/Response";
import { Report } from "../../../lib/pokemon/model/Report";
import { PokeSnippet } from "../../../lib/pokemon/snippets/PokemonSnippet";
import { IPokeReportRepository } from "../repository/IPokeReportRepository";

export class BattleUseCase{

    repository: IPokeReportRepository;

    constructor(repository: IPokeReportRepository){
        this.repository = repository;
    }

    async battle (pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet){
        while((pokemonOne.defense && pokemonTwo.defense) > 0){
            pokemonOne.defense -= pokemonTwo.attack;
            pokemonTwo.defense -= pokemonOne.attack;
        }

        const winnerId = pokemonOne.defense <= 0 ? pokemonOne.id : pokemonTwo.id;

        const battleReport = new Report(pokemonOne, pokemonTwo, winnerId);
        
        console.log(battleReport);

        await IPokeReportRepository.put(battleReport);

        return new Response(200, battleReport.getBattleDescription());
    }
}