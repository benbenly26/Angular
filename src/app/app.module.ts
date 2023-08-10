import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {SidebarModule} from 'ng-cdbangular';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {CompanyComponent} from './company/company.component';
import {ApplicationsComponent} from './applications/applications.component';
import {ConfigureroleComponent} from './configurerole/configurerole.component';
import {AdminsComponent} from './admins/admins.component';
import {UsersComponent} from './users/users.component';
import {GroupsComponent} from './groups/groups.component';
import {ReportsComponent} from './reports/reports.component';
import {DomainComponent} from './domain/domain.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {CanvasJSAngularChartsModule} from '@canvasjs/angular-charts';
import { NgdatepickerbasicComponent } from './ngdatepickerbasic/ngdatepickerbasic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup/ngbd-datepicker-popup.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'applications', component: ApplicationsComponent},
  {path: 'configurerole', component: ConfigureroleComponent},
  {path: 'admins', component: AdminsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'domain', component: DomainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CompanyComponent,
    ApplicationsComponent,
    ConfigureroleComponent,
    AdminsComponent,
    UsersComponent,
    GroupsComponent,
    ReportsComponent,
    DomainComponent,
    LineChartComponent,
    NgdatepickerbasicComponent,
    NgbdDatepickerPopupComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    SidebarModule,
    FormsModule,
    NgbDatepickerModule,
    CanvasJSAngularChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
