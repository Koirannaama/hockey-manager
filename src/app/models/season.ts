import { Schedule } from './schedule';

export interface Season {
    seasonNumber: number;
    currentWeek: number;
    schedule: Schedule;
    hasEnded: boolean;
}
