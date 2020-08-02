import { Team } from 'src/app/models/team';
import { Fixture } from 'src/app/models/fixture';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { Standings } from './../../models/standings';
import { StandingsBuilder } from '../../data/standings-builder';

export interface SummaryViewState {
    playerTeam: Team;
    playerTeamFixtures: Fixture[];
    standings: Standings;
}

function getPlayerFixtures(state: AppState): Fixture[] {
    return state.schedule.matchDates.map(fixtures =>
        fixtures.find(f => f.homeTeam.name === state.playerTeam.name || f.awayTeam.name === state.playerTeam.name)
    );
}

export const selectSummaryViewState = createSelector(
    (stateObj: { state: AppState }) => stateObj.state,
    state => ({
        playerTeam: state.playerTeam,
        playerTeamFixtures: getPlayerFixtures(state),
        standings: new StandingsBuilder(state.schedule)
    })
);