import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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



@NgModule({
  declarations: [
    MedPortalComponent,
    MedPortalPerfilComponent,
    AgendaConfigurationComponent,
    AgendaScheduleComponent,
    AgendaExceptionModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class AppMedportalModule { }
