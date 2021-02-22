export enum Position {
    Forward = 'F',
    Defender = 'D',
    Goalie = 'G'
}

export interface Player {
    firstName: string;
    lastName: string;
    offense: number;
    defense: number;
    goalie: number;
}
