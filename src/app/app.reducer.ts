import { TEAMS } from './data/teams';
import { createReducer, Action, on } from '@ngrx/store';
import { startSeason, advanceSeason } from './data/season-engine';
import { AppState } from './app-state';
import { databaseLoaded, nextDay } from './app.actions';

export const initialState: AppState = {
    playerTeam: TEAMS[0],
    season: startSeason(),
    currentSeason: 0
};

function advanceToNextDay(state: AppState): AppState {
    const updatedSeason = state.season.hasEnded ? startSeason() : advanceSeason( state.season );
    return { ...state, season: updatedSeason };
}

function setupData(state: AppState): AppState {
    return state;
}

const reducer = createReducer(
    initialState,
    on(nextDay, state => advanceToNextDay(state)),
    on(databaseLoaded, state => setupData(state))
);

export function appReducer(state: AppState, action: Action): AppState {
    return reducer(state, action);
}
