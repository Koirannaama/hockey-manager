import { createAction } from '@ngrx/store';

export const nextDay = createAction('[AppComponent] Advance to next day');
export const newSeason = createAction('[AppComponent] Start new season');

export const loadDatabase = createAction('[AppComponent] Load database');
export const databaseLoaded = createAction('[AppComponent] Database loaded');
