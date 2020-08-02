import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { nextDay } from './app.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private store: Store) {}

    public nextDayClicked(): void {
        this.store.dispatch(nextDay());
    }
}
