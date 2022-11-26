import { Report } from "../../../lib/pokemon/model/Report";
import { PokeSnippet } from "../../../lib/pokemon/snippets/PokemonSnippet";
import { IPokeReportRepository } from "../repository/IPokeReportRepository";

export class BattleUseCase{

    repository: IPokeReportRepository;

    constructor(repository: IPokeReportRepository){
        this.repository = repository;
    }

    async battle (pokemonOne: PokeSnippet, pokemonTwo: PokeSnippet){
        console.log(`BATTLE STARTED:: ${pokemonOne.name} X ${pokemonTwo.name}`);
        let roundCount = 1;
        while((pokemonOne.defense || pokemonTwo.defense) > 0){
            pokemonOne.defense -= pokemonTwo.attack;
            pokemonTwo.defense -= pokemonOne.attack;
            console.log(`BATTLE ROUND:: ROUND ${roundCount} :: \n ${pokemonOne.name} -> DEFENSE = ${pokemonOne.defense} \n ${pokemonTwo.name} -> DEFENSE = ${pokemonTwo.defense}`)
            roundCount += 1;
        }

        const winnerId = pokemonOne.defense <= 0 ? pokemonTwo.id : pokemonOne.id;

        const battleReport = new Report(pokemonOne, pokemonTwo, winnerId);
        
        console.log(battleReport);

        await IPokeReportRepository.put(battleReport);

        return battleReport;
    }
}