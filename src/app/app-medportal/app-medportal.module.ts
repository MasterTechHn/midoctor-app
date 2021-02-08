import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../modules/app-routing.module';
import { AppMaterialModule } from '../modules/app-material.module';
import { MedPortalComponent } from './med-portal.component';
import { MedPortalPerfilComponent } from './perfil/med-portal-perfil.component';
import { AgendaConfigurationComponent } from './agenda/agenda-configuration/agenda-configuration.component';
import { AgendaScheduleComponent } from './agenda/agenda-schedule/agenda-schedule.component';
import { AgendaExceptionModalComponent } from './agenda/agenda-configuration/agenda-exception-modal/agenda-exception-modal.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './demo-utils/demo-utils.component';



@NgModule({
  declarations: [
    MedPortalComponent,
    MedPortalPerfilComponent,
    AgendaConfigurationComponent,
    AgendaScheduleComponent,
    AgendaExceptionModalComponent,
    CalendarHeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    CalendarModule.forRoot({ 
      provide: DateAdapter, useFactory: adapterFactory,
    }),
  ],
})
export class AppMedportalModule { }
