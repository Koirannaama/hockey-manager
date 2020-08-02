import { TeamPerformance } from '../models/team-performance';

export class ComparableTeamPerformance implements TeamPerformance {
    private _wins = 0;
    private _losses = 0;
    private _ties = 0;
    private _points = 0;

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

    public compare(other: ComparableTeamPerformance): number {
        if (this._points !== other._points) {
            return this.points - other._points;
        }

        // TODO: add goal total comparison
    }
}
