import Moment from 'moment';
import {v4 as uuid } from 'uuid';

export type PokeType = 'ELECTRIC' | 'FIRE' | 'WATER' | 'GRASS'

export class Pokemon{
    pokeId: string;
    name: string;
    pokeType: PokeType;
    attack: number;
    defense: number;
    createdAt: string;
    updatedAt: number;

    constructor(name: string, pokeType: PokeType, attack: number, defense: number){
        this.pokeId = uuid();
        this.name = name;
        this.pokeType = pokeType;
        this.attack = attack;
        this.defense = defense;
        this.createdAt = Moment().format();
        this.updatedAt = Moment.now();
    }
}