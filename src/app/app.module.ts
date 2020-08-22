import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';
import { appReducer } from './app.reducer';
import { StandingsComponent } from './views/summary-view/standings/standings.component';
import { FixturesViewComponent } from './views/fixtures-view/fixtures-view.component';

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
    StoreModule.forRoot({ state: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
