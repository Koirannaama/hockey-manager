import { Schedule } from "../models/schedule";

import { TEAMS } from './teams';

export function generateSchedule(): Schedule {
    return {
        matchDates: [
            [
                { homeTeam: TEAMS[0], awayTeam: TEAMS[1], homeGoals: null, awayGoals: null },
                { homeTeam: TEAMS[2], awayTeam: TEAMS[3], homeGoals: null, awayGoals: null }
            ],
            [
                { homeTeam: TEAMS[0], awayTeam: TEAMS[2], homeGoals: null, awayGoals: null },
                { homeTeam: TEAMS[1], awayTeam: TEAMS[3], homeGoals: null, awayGoals: null }
            ],
            [
                { homeTeam: TEAMS[0], awayTeam: TEAMS[3], homeGoals: null, awayGoals: null },
                { homeTeam: TEAMS[1], awayTeam: TEAMS[2], homeGoals: null, awayGoals: null }
            ],
            [
                { homeTeam: TEAMS[1], awayTeam: TEAMS[0], homeGoals: null, awayGoals: null },
                { homeTeam: TEAMS[3], awayTeam: TEAMS[2], homeGoals: null, awayGoals: null }
            ],
            [
                { homeTeam: TEAMS[2], awayTeam: TEAMS[0], homeGoals: null, awayGoals: null },
                { homeTeam: TEAMS[3], awayTeam: TEAMS[1], homeGoals: null, awayGoals: null }
            ],
            [
                { homeTeam: TEAMS[3], awayTeam: TEAMS[0], homeGoals: null, awayGoals: null },
                { homeTeam: TEAMS[2], awayTeam: TEAMS[1], homeGoals: null, awayGoals: null }
            ]
        ]
    };
}