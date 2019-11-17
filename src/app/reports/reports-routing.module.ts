import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotReportsComponent } from './flot-reports/flot-reports.component';
import { InlineReportsComponent } from './inline-reports/inline-reports.component';
import { JsReportsComponent } from './js-reports/js-reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'flot-reports' },
  { path: 'flot-reports', component: FlotReportsComponent, data: { title: 'Flat Reports'} },
  { path: 'inline-reports', component: InlineReportsComponent, data: { title: 'Inline Reports',} },
  { path: 'js-reports', component: JsReportsComponent, data: { title: 'JS Reports',} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
