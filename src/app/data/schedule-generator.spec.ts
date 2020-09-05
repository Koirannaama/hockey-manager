import { generateSchedule } from "./schedule-generator";
import { TEAMS } from "./teams";

describe('Schedule generator', () => {

    it('should generate schedule', () => {
        const schedule = generateSchedule(TEAMS);
        expect(schedule).toBeTruthy();
    });
});