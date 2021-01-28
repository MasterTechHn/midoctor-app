import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../modules/app-routing.module';
import { AppMaterialModule } from '../modules/app-material.module';
import { MedPortalComponent } from './med-portal.component';
import { MedPortalPerfilComponent } from './perfil/med-portal-perfil.component';
import { AgendaConfigurationComponent } from './agenda/agenda-configuration/agenda-configuration.component';
import { AgendaScheduleComponent } from './agenda/agenda-schedule/agenda-schedule.component';



@NgModule({
  declarations: [
    MedPortalComponent,
    MedPortalPerfilComponent,
    AgendaConfigurationComponent,
    AgendaScheduleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class AppMedportalModule { }
