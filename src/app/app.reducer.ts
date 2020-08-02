import { TEAMS } from './data/teams';
import { createReducer, Action, on } from '@ngrx/store';
import { generateSchedule } from './data/schedule-generator';
import { AppState } from './app-state';
import { MatchEngine } from './data/match-engine';
import { nextDay } from './app.actions';

const matchEngine = new MatchEngine();

export const initialState: AppState = {
    playerTeam: TEAMS[0],
    schedule: generateSchedule(),
    currentDay: 0
};

function advanceToNextDay(state: AppState): AppState {
    const matchsForDay = state.schedule.matchDates[state.currentDay];
    const matchesWithResult = matchsForDay.map(fixture => matchEngine.runMatch(fixture));
    const updatedSchedule = {
        ...state.schedule,
        matchDates: state.schedule.matchDates.map(
            (fs, i) => i === state.currentDay ? matchesWithResult : fs
        ) };
    return { ...state, schedule: updatedSchedule, currentDay: state.currentDay + 1 };
}

const reducer = createReducer(
    initialState,
    on(nextDay, state => advanceToNextDay(state))
);

export function appReducer(state: AppState, action: Action): AppState {
    return reducer(state, action);
}
