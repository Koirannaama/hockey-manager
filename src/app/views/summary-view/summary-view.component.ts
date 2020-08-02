import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectSummaryViewState } from './summary-view-state';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Fixture } from 'src/app/models/fixture';
import { Standings } from 'src/app/models/standings';
import { TeamPerformance } from 'src/app/models/team-performance';

@Component({
    selector: 'app-summary-view',
    templateUrl: './summary-view.component.html',
    styleUrls: ['./summary-view.component.scss']
})
export class SummaryViewComponent implements OnInit {

    public readonly teamName$: Observable<string>;
    public readonly fixtures$: Observable<Fixture[]>;
    public readonly performances$: Observable<TeamPerformance[]>;

    constructor(store: Store) {
        const summaryState$ = store.pipe(select(selectSummaryViewState));
        this.teamName$ = summaryState$.pipe(map(s => s?.playerTeam.name ?? 'ei mikään'));
        this.fixtures$ = summaryState$.pipe(map(s => s.playerTeamFixtures));
        this.performances$ = summaryState$.pipe(map(s => s.standings.performances));
    }

    ngOnInit(): void {
    }

}
