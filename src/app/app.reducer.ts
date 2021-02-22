import { TEAMS } from './data/teams';
import { createReducer, Action, on } from '@ngrx/store';
import { generateSchedule } from './data/schedule-generator';
import { AppState } from './app-state';
import { MatchEngine } from './data/match-engine';
import { databaseLoaded, nextDay } from './app.actions';

const matchEngine = new MatchEngine();

export const initialState: AppState = {
    playerTeam: TEAMS[0],
    schedule: generateSchedule(TEAMS),
    currentDay: 0,
    currentSeason: 0
};

function advanceToNextDay(state: AppState): AppState {
    const matchesForDay = state.schedule.matchDates.get(state.currentDay);
    const matchesWithResult = matchesForDay.map(fixture => matchEngine.runMatch(fixture));

    const updatedSchedule = {
        ...state.schedule,
        matchDates: state.schedule.matchDates.set( state.currentDay, matchesWithResult )
    };

    return { ...state, schedule: updatedSchedule, currentDay: state.currentDay + 1 };
}

function setupData(state: AppState): AppState {
    console.log('database received');
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
