import { PokeSnippet } from "../snippets/PokemonSnippet";
import Moment from 'moment';
import {v4 as Uuid} from 'uuid';

export class BattleDetails{
    

}

export class Report{
    id: string;
    pokeOne: PokeSnippet;
    pokeTwo: PokeSnippet;
    winnerId: string;
    happenedAt: Date;
    battleDetails?: BattleDetails;

    constructor(pokeOne: PokeSnippet, pokeTwo: PokeSnippet, winnerId: string, battleDetails: BattleDetails = {}){
        this.pokeOne = pokeOne;
        this.pokeTwo = pokeTwo;
        this.winnerId = winnerId;
        this.id = Uuid();
        this.happenedAt = Moment().toDate();
        this.battleDetails = battleDetails;
    }

    getBattleDescription() {
        return `
        Pokemon ${this.pokeOne.name} and Pokemon ${this.pokeTwo.name} faced each other in a battle at ${this.happenedAt}. The winner was ${
            this.winnerId == this.pokeOne.id ? this.pokeOne.name : this.pokeTwo.name 
        }. The report was saved to database!
        `
    }
}