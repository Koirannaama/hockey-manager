import { Team } from '../models/team';
import { Fixture } from './../models/fixture';
export class MatchEngine {

    private readonly baseChancesTotal = 25;
    private readonly baseGoalProb = 0.1;

    public runMatch(match: Fixture): Fixture {
        if ( match.homeGoals || match.awayGoals ) {
            throw new Error(`Match ${match.homeTeam.name} - ${match.awayTeam.name} has already been decided!`);
        }

        return { ...match,
            homeGoals: this.calculateTeamGoals(match.homeTeam, match.awayTeam),
            awayGoals: this.calculateTeamGoals(match.awayTeam, match.homeTeam)
        };
    }

    private calculateTeamGoals(forTeam: Team, opponent: Team): number {
        const [teamOff, teamDef, teamGoalie] = this.getLevels(forTeam);
        console.log(`${forTeam.name}: O:${teamOff}, D${teamDef}, G:${teamGoalie}`);
        const [oppoOff, oppoDef, oppoGoalie] = this.getLevels(opponent);

        const chancesTotal = teamOff / oppoDef * this.baseChancesTotal;
        const goalProb = teamOff / oppoGoalie * this.baseGoalProb;

        // Binomial distribution
        let goals = 0;
        for (let i = 0; i < chancesTotal; i++) {
            goals = Math.random() <= goalProb ? goals + 1 : goals;
        }
        console.log(`Chances: ${chancesTotal}, probability: ${goalProb}, goals: ${goals}`);

        return goals;
    }

    private getLevels(team: Team): [number, number, number] {
        const avgOffense = team.players.map(p => p.offense).sort((a, b) => b - a).slice(0, 12).reduce((avg, off) => avg + off / 12, 0);
        const avgDefense = team.players.map(p => p.defense).sort((a, b) => b - a).slice(0, 6).reduce((avg, def) => avg + def / 6, 0);
        const goalie = Math.max(...team.players.map(p => p.goalie));
        return [avgOffense, avgDefense, goalie];
    }
}
