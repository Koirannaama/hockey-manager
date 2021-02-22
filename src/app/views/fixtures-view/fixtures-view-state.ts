import { Schedule } from '../../models/schedule';
import { createSelector } from '@ngrx/store';
import { AppState } from '../../app-state';

export interface FixturesViewState {
    schedule: Schedule;
}

export const selectFixturesViewState = createSelector(
    (stateObj: { state: AppState }) => stateObj.state,
    state => ({
        schedule: state.season.schedule
    })
);
