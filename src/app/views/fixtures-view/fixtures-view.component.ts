import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFixturesViewState } from './fixtures-view-state';
import { map } from 'rxjs/operators';
import { Fixture } from '../../models/fixture';

@Component({
    selector: 'app-fixtures-view',
    templateUrl: './fixtures-view.component.html',
    styleUrls: ['./fixtures-view.component.scss']
})
export class FixturesViewComponent {

    dates$: Observable<Fixture[][]>;

    constructor(store: Store) {
        this.dates$ = store.pipe(select(selectFixturesViewState), map(s => s.schedule.matchDates));
    }
}
