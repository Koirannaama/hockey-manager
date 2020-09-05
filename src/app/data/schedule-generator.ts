import { Schedule } from "../models/schedule";

import { Team } from "../models/team";
import { Fixture } from "../models/fixture";

export function generateSchedule(forTeams: Team[]): Schedule {
    const allGames = forTeams.reduce((allGames, currentTeam) => {
        const otherTeams = forTeams.filter(t => t !== currentTeam);
        const homeGames = otherTeams.map(other => [currentTeam, other]);
        return allGames.concat(homeGames);
    }, []);
    
    const matchDates: Fixture[][] = [];
    while (allGames.length > 0) {
        matchDates.push(generateMatchDay(forTeams, allGames));
    }
    return { matchDates }
}

function generateMatchDay(teams: Team[], possibleMatches: [Team, Team][]): Fixture[] {
    const maxMatches = Math.floor(teams.length / 2);
    const matchCount = Math.floor(Math.random() * maxMatches) + 1;

    const matchDate: [Team, Team][] = [];
    for (let i = 0; i < matchCount; i++) {
        const matchIndex = possibleMatches.findIndex(candidate => isLegalMatch(candidate, matchDate));
        if (matchIndex < 0) {
            break;
        }
        matchDate.push(possibleMatches.splice(matchIndex, 1)[0]);
    }
    return matchDate.map(([homeTeam, awayTeam]) => ({homeTeam, awayTeam, homeGoals: null, awayGoals: null}));
}

function isLegalMatch(candidateMatch: [Team, Team], matchesOnDay: [Team, Team][]): boolean {
    const [home, away] = candidateMatch;
    const allTeams = matchesOnDay.reduce((teams, match) => teams.concat(match), []);
    return allTeams.every(team => team.name !== home.name && team.name !== away.name);
}