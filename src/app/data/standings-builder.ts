import { Schedule } from '../models/schedule';
import { TeamPerformance } from '../models/team-performance';
import { Standings } from '../models/standings';
import { Fixture } from '../models/fixture';
import { Team } from '../models/team';
import { ComparableTeamPerformance } from './comparable-team-performance';

export class StandingsBuilder implements Standings {
    private _standings: TeamPerformance[];

    constructor(schedule: Schedule) {
        this.calculateStandings(schedule);
    }

    public get performances(): TeamPerformance[] {
        return this._standings;
    }

    private calculateStandings(schedule: Schedule): void {
        const performances = new Map<string, ComparableTeamPerformance>();
        schedule.matchDates.forEach(date => {
            date.forEach(fixture => {
                this.updatePerformanceFor(fixture.homeTeam, fixture, performances);
                this.updatePerformanceFor(fixture.awayTeam, fixture, performances);
            });
        });
        this._standings = [ ...performances.values() ].sort((perf1, perf2) => perf1.compare(perf2));
    }

    private updatePerformanceFor(team: Team, fixture: Fixture, performances: Map<string, ComparableTeamPerformance>): void {
        const performance = performances.has(team.name) ? performances.get(team.name) : new ComparableTeamPerformance(team.name);
        performances.set(team.name, performance);

        if (fixture.homeGoals == null || fixture.awayGoals == null) {
            return;
        }

        const [goalsFor, goalsAllowed] = team.name === fixture.homeTeam.name
            ? [fixture.homeGoals, fixture.awayGoals] : [fixture.awayGoals, fixture.homeGoals];
        const goalDiff = goalsFor - goalsAllowed;
        if (goalDiff === 0) {
            performance.addTie();
        }
        else if (goalDiff > 0) {
            performance.addWin();
        }
        else {
            performance.addLoss();
        }
        performance.addGoals(goalsFor, goalsAllowed);
    }
}
