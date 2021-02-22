import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isSeasonOver } from './app-state';
import { nextDay } from './app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public advanceBtnText$: Observable<string>;

    constructor(private store: Store) {
        this.advanceBtnText$ = store.pipe(select(isSeasonOver)).pipe(
            map( isOver => isOver ? 'Uusi kausi' : 'Seuraava päivä' )
        );
    }

    public nextDayClicked(): void {
        this.store.dispatch(nextDay());
    }
}
