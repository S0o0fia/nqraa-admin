import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { adminLteConf } from './admin-lte.conf';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {CalendarModule} from 'primeng/calendar';
import { LayoutModule } from 'angular-admin-lte';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import {TabModule} from 'angular-tabs-component';
import { ChartComponent } from './chart/chart.component';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/guard/auth.guard';
import { ProjectsComponent } from './projects/projects.component';
import { TableOfQuantitiesComponent } from './table-of-quantities/table-of-quantities.component';
import { RequestForInspectionComponent } from './request-for-inspection/request-for-inspection.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CriticalareaComponent } from './criticalarea/criticalarea.component';
import { SaftysecurityComponent } from './saftysecurity/saftysecurity.component';
import { TabsComponent } from './shared/tabs/tabs.component';

import { LoginComponent } from './+login/login.component';

// import { LoginComponent } from './+login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    LanguageTranslationModule,
    NgbDropdownModule,
    Daterangepicker,
    CKEditorModule,
    ReactiveFormsModule,
    CalendarModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton:true
    }),
    BrowserAnimationsModule,
    AngularFontAwesomeModule ,
    TabModule
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    DashboardComponent,
    ProjectsComponent,
    TableOfQuantitiesComponent,
    RequestForInspectionComponent,
    AttendanceComponent,
    CriticalareaComponent,
    SaftysecurityComponent,
    TabsComponent,
    LoginComponent
    
   
    // LoginComponent
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
