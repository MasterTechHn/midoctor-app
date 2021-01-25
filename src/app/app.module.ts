import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavHeroComponent } from './nav-hero/nav-hero.component';
import { FooterComponent } from './footer/footer.component';
import { PostulantComponent } from './postulant/postulant.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ModalRequestComponent } from './modal-request/modal-request.component';
import { MedPortalComponent } from './medPortal/med-portal/med-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeroComponent,
    FooterComponent,
    PostulantComponent,
    LandingPageComponent,
    ModalRequestComponent,
    MedPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
