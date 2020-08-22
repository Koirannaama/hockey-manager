import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';
import { FixturesViewComponent } from './views/fixtures-view/fixtures-view.component';


const routes: Routes = [
    { path: '', component: SummaryViewComponent },
    { path: 'fixtures', component: FixturesViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
