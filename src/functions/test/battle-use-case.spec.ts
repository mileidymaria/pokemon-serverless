import { IPokeReportRepository } from '../modules/battle/repository/IPokeReportRepository';
//@ts-ignore
import * as chai from 'chai';
import { PokeSnippet } from '../lib/pokemon/snippets/PokemonSnippet';
import { BattleUseCase } from '../modules/battle/use-case/battle-use-case';

jest.mock('../modules/battle/repository/IPokeReportRepository');

const pokemonOne: PokeSnippet = {
    pokeId: "123e4567-e89b-12d3-a456-426614174000",
    name: "pikachu",
    attack: 2000,
    defense: 10000
}

const pokemonTwo: PokeSnippet = {
    "pokeId": "123e4567-e89b-12d3-a456-526614174000",
    "name": "charmander",
    "attack": 3000,
    "defense": 12000
}

describe("Battle Use Case", () =>{

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("Given two pokemon, the second pokemon should win", () =>{
        const expectedWinnerId = "123e4567-e89b-12d3-a456-526614174000";
        const battleUseCase = new BattleUseCase(new IPokeReportRepository());
        battleUseCase.battle(pokemonOne, pokemonTwo).then((res) => {
            //chai.assert.equal(res.winnerId, expectedWinnerId);
            expect(res.winnerId).toBe(expectedWinnerId);
        });
    });
})

