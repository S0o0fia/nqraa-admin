import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { TableOfQuantitiesComponent } from './table-of-quantities/table-of-quantities.component';
import { RequestForInspectionComponent } from './request-for-inspection/request-for-inspection.component';
import { ProjectsComponent } from './projects/projects.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CriticalareaComponent } from './criticalarea/criticalarea.component';
import { SaftysecurityComponent } from './saftysecurity/saftysecurity.component';
import { LoginComponent } from './+login/login.component';

const routes: Routes = [
  
  {
    path:'',
    component:LoginComponent,
    data: {
      customLayout: true
    }

  }
  ,{
    
    path: '',
    data: {
      title: 'الرئيسية'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'accordion',
        loadChildren: './+accordion/accordion.module#AccordionModule',
        data: { title: 'Accordion' },
        canActivate: [AuthGuard]
      },
      {
        path: 'alert',
        loadChildren: './+alert/alert.module#AlertModule',
        data: { title: 'Alert', },
        canActivate: [AuthGuard]
      },
      {
        path: 'modal',
        loadChildren: './+modal/modal.module#ModalModule',
        data: { title: 'Modal', },
        canActivate: [AuthGuard]
      },
      {
        path: 'charts',
        component: ChartComponent,
        data: { title: 'التقارير' },
        canActivate: [AuthGuard]
      },
      {
        path: 'table-of-quantities',
        component: TableOfQuantitiesComponent,
        data: { title: 'جدول الكميات' }
      },
      {
        path: 'request-for-inspection',
        component:RequestForInspectionComponent,
        data: { title: 'طلب فحص العمل' }
      },
      {path:'projects', component:ProjectsComponent},
      {
        path: 'project',
        data: {
          title: 'المشاريع',
        },
        children: [
          {
            path: 'create-project',
            loadChildren: './+project/create-project/create-project.module#CreateProjectModule',
            data: {
              title: 'إنشاء مشروع',
            },
            canActivate: [AuthGuard]
          },
          {
            path: 'project-list',
            loadChildren: './+project/project-list/project-list.module#ProjectListModule',
            data: {
              title: 'قائمة المشاريع',
            },
            canActivate: [AuthGuard]
          }
        ]
      },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule',canActivate: [AuthGuard] },
      {
        path: 'layout',
        data: { title: 'Layout', },
        children: [
          {
            path: 'configuration',
            loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
            data: { title: 'Configuration' },
            canActivate: [AuthGuard]
          },
          {
            path: 'custom',
            loadChildren: './+layout/custom/custom.module#CustomModule',
            data: {
              title: 'Disable Layout'
              // disableLayout: true
            },
            canActivate: [AuthGuard]
          },
          {
            path: 'content',
            loadChildren: './+layout/content/content.module#ContentModule',
            data: { title: 'Content' },
            canActivate: [AuthGuard]
          },
          {
            path: 'header',
            loadChildren: './+layout/header/header.module#HeaderModule',
            data: {
              title: 'Header'
            },
            canActivate: [AuthGuard]
          }, {
            path: 'sidebar-left',
            loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
            data: {
              title: 'Sidebar Left'
            },
            canActivate: [AuthGuard]
          }, {
            path: 'sidebar-right',
            loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
            data: {
              title: 'Sidebar Right'
            },
            canActivate: [AuthGuard]
          },
        ]
      }, {
        path: 'boxs',
        data: {
          title: 'Boxs',
        },
        children: [
          {
            path: 'box',
            loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule',
            data: {
              title: 'Box'
            },
            canActivate: [AuthGuard]
          }, {
            path: 'info-box',
            loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule',
            data: {
              title: 'Info Box'
            },
            canActivate: [AuthGuard]
          }, {
            path: 'small-box',
            loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule',
            data: {
              title: 'Small Box'
            },
            canActivate: [AuthGuard]
          }
        ]
      }, {
        path: 'dropdown',
        loadChildren: './+dropdown/dropdown.module#DropdownModule',
        data: {
          title: 'Dropdown',
        },
        canActivate: [AuthGuard]
      }, {
        path: 'tabs',
        loadChildren: './+tabs/tabs.module#TabsModule',
        data: {
          title: 'Tabs',
        },
        canActivate: [AuthGuard]
      }
    ]
  }, {
    path: 'form',
    data: {
      title: 'Form',
    },
    children: [
      {
        path: 'input-text',
        loadChildren: './+form/input-text/input-text.module#InputTextModule',
        data: {
          title: 'Input Text',
        },
        canActivate: [AuthGuard]
      }
    ]
  }, {
    path: 'login',
    component: LoginComponent,
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },
  {
    path:'attendace',
    component: AttendanceComponent,
    data: { title: 'الحضور والانصراف' },
    canActivate: [AuthGuard]

  },
  {
    path:'criticalarea',
    component: CriticalareaComponent,
    data: { title: 'المناطق الحرجة للمشاريع' },
    canActivate: [AuthGuard]

  },
  {
    path:'SaftyandSecurity',
    component: SaftysecurityComponent,
    data: { title: 'الأمن والسلامة' },
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
