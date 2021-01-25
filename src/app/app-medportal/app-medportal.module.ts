import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../modules/app-material.module';
import { MedPortalComponent } from './med-portal.component';



@NgModule({
  declarations: [
    MedPortalComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class AppMedportalModule { }
