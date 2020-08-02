import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SummaryViewComponent
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
