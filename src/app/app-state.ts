import { Team } from './models/team';
import { Season } from './models/season';
import { createSelector } from '@ngrx/store';

export interface AppState {
    playerTeam: Team;
    season: Season;
    currentSeason: number;
}

export const isSeasonOver = createSelector(
    (stateObj: { state: AppState }) => stateObj.state,
    state => state.season.hasEnded
);
