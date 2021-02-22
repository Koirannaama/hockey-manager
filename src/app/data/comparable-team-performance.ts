import { TeamPerformance } from '../models/team-performance';

export class ComparableTeamPerformance implements TeamPerformance {
    private _wins = 0;
    private _losses = 0;
    private _ties = 0;
    private _points = 0;
    private _goalsAllowed = 0;
    private _goalsFor = 0;

    constructor(public readonly teamName: string) {}

    public get points(): number {
        return this._points;
    }

    public get wins(): number {
        return this._wins;
    }

    public get ties(): number {
        return this._ties;
    }

    public get losses(): number {
        return this._losses;
    }

    public get goalsFor(): number {
        return this._goalsFor;
    }

    public get goalsAllowed(): number {
        return this._goalsAllowed;
    }

    public get goalDiff(): number {
        return this._goalsFor - this._goalsAllowed;
    }

    public addWin(): void {
        this._wins++;
        this._points = this._points + 3;
    }

    public addTie(): void {
        this._ties++;
        this._points++;
    }

    public addLoss(): void {
        this._losses++;
    }

    public addGoals( goalsFor: number, goalsAllowed: number ): void {
        this._goalsFor += goalsFor;
        this._goalsAllowed += goalsAllowed;
    }

    public compare(other: ComparableTeamPerformance): number {
        if (this._points !== other._points) {
            return other.points - this.points;
        } else if (this.goalDiff !== other.goalDiff) {
            return other.goalDiff - this.goalDiff;
        } else if (this.goalsFor !== other.goalsFor) {
            return other.goalsFor - this.goalsFor;
        } else if (this.goalsAllowed !== other.goalsAllowed) {
            return other.goalsAllowed - other.goalsAllowed;
        }

        return 0;

        // TODO: other criteria? (points per game, wins etc.)
    }
}
