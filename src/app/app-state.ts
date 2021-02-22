import { Team } from './models/team';
import { Schedule } from './models/schedule';

export interface AppState {
    playerTeam: Team;
    schedule: Schedule;
    currentDay: number;
    currentSeason: number;
}
