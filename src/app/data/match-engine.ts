import { Fixture } from './../models/fixture';
export class MatchEngine {

    public runMatch( match: Fixture ): Fixture {
        if ( match.homeGoals || match.awayGoals ) {
            throw new Error(`Match ${match.homeTeam.name} - ${match.awayTeam.name} ha already been decided`);
        }

        return { ...match, homeGoals: this.calculateGoals(), awayGoals: this.calculateGoals() };
    }

    private calculateGoals(): number {
        const maxGoals = 8;
        return Math.floor(Math.random() * maxGoals);
    }
}
