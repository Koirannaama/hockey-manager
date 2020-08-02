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
                if (fixture.homeGoals != null && fixture.awayGoals != null) {
                    this.updatePerformanceFor(fixture.homeTeam, fixture, performances);
                    this.updatePerformanceFor(fixture.awayTeam, fixture, performances);
                }
            });
        });
        this._standings = [ ...performances.values() ].sort((perf1, perf2) => perf2.points - perf1.points);
    }

    private updatePerformanceFor(team: Team, fixture: Fixture, performances: Map<string, ComparableTeamPerformance>): void {
        const performance = performances.has(team.name) ? performances.get(team.name) : new ComparableTeamPerformance(team.name);

        const goalDiff = fixture.homeGoals - fixture.awayGoals;
        if (goalDiff === 0) {
            performance.addTie();
        }
        else if (
            goalDiff > 0 && team.name === fixture.homeTeam.name ||
            goalDiff < 0 && team.name === fixture.awayTeam.name
        ) {
            performance.addWin();
        }
        else {
            performance.addLoss();
        }
        performances.set(team.name, performance);
    }
}
