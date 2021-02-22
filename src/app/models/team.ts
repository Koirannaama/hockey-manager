import { Player } from './player';

export interface Team {
    name: string;
    strength: number;
    players: Player[];
}
