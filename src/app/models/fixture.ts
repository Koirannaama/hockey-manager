import { Team } from './team';

export interface Fixture {
    homeTeam: Team;
    awayTeam: Team;
    homeGoals: number;
    awayGoals: number;
}