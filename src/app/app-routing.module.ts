import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';


const routes: Routes = [
    { path: '', component: SummaryViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
