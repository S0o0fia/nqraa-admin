import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { FlotReportsComponent } from './flot-reports/flot-reports.component';
import { ReportsComponent } from './reports.component';
import { InlineReportsComponent } from './inline-reports/inline-reports.component';
import { JsReportsComponent } from './js-reports/js-reports.component';


@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [FlotReportsComponent, ReportsComponent, InlineReportsComponent, JsReportsComponent]
})
export class ReportsModule { }
