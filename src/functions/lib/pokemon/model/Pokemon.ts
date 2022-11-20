import { v4 as uuid } from 'uuid';
import Moment from 'moment';

export type PokeType = 'ELECTRIC' | 'FIRE' | 'WATER' | 'GRASS'

export class Pokemon{
    id: string;
    name: string;
    pokeType: PokeType;
    attack: number;
    defense: number;
    createdAt: Date;
    updatedAt: number;

    constructor(name: string, pokeType: PokeType, attack: number, defense: number){
        this.id = uuid();
        this.name = name;
        this.pokeType = pokeType;
        this.attack = attack;
        this.defense = defense;
        this.createdAt = Moment().toDate();
        this.updatedAt = Moment.now();
    }
}