import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PostulantComponent } from '../postulant/postulant.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { MedPortalComponent } from '../medPortal/med-portal/med-portal.component';

const routes: Routes = [{ 
  path: '', redirectTo: '/index', pathMatch: 'full' 
},
{
  path: 'index', component: LandingPageComponent
},
{
  path: 'apply', component: PostulantComponent
},
{
  path: 'med-portal', component: MedPortalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
