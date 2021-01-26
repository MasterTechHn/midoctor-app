import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../modules/app-routing.module';
import { AppMaterialModule } from '../modules/app-material.module';
import { MedPortalComponent } from './med-portal.component';
import { MedPortalPerfilComponent } from './perfil/med-portal-perfil.component';
import { AgendaComponent } from './agenda/agenda.component';



@NgModule({
  declarations: [
    MedPortalComponent,
    MedPortalPerfilComponent,
    AgendaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule
  ]
})
export class AppMedportalModule { }
