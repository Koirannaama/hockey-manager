import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';
import { appReducer } from './app.reducer';
import { StandingsComponent } from './views/summary-view/standings/standings.component';
import { FixturesViewComponent } from './views/fixtures-view/fixtures-view.component';
import { loadDatabase } from './app.actions';
import { EffectsModule } from '@ngrx/effects';
import { DatabaseLoadEffect } from './data/database-load.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        SummaryViewComponent,
        StandingsComponent,
        FixturesViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EffectsModule.forRoot([ DatabaseLoadEffect]),
        StoreModule.forRoot({ state: appReducer })
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: (store: Store) => {
            return () => {
                store.dispatch(loadDatabase());
            };
        },
        multi: true,
        deps: [Store]
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
