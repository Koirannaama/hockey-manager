import { Season } from '../models/season';
import { generateSchedule } from './schedule-generator';
import { TEAMS } from './teams';
import { MatchEngine } from './match-engine';

const seasonNumber = 0;
const matchEngine = new MatchEngine();

export function startSeason(): Season {
    return {
        seasonNumber,
        currentWeek: 0,
        schedule: generateSchedule(TEAMS),
        hasEnded: false
    };
}

export function advanceSeason( season: Season ): Season {
    const weekFixtures = season.schedule.matchDates.get(season.currentWeek);
    const matchesWithResult = weekFixtures.map(fixture => matchEngine.runMatch(fixture));

    const updatedSchedule = {
        ...season.schedule,
        matchDates: season.schedule.matchDates.set( season.currentWeek, matchesWithResult )
    };
    const nextWeek = season.currentWeek + 1;

    return {
        ...season,
        currentWeek: nextWeek,
        schedule: updatedSchedule,
        hasEnded: !season.schedule.matchDates.has( nextWeek )
    };
}
