import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { databaseLoaded, loadDatabase } from '../app.actions';
import { tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class DatabaseLoadEffect {

    public readonly loadDatabase$ = createEffect(() => this._actions.pipe(
        ofType(loadDatabase),
        tap(() => console.log('load')),
        switchMap(() => of(databaseLoaded()))
    ));

    constructor(private _actions: Actions, private _http: HttpClient) {

    }
}
