import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PostulantComponent } from '../postulant/postulant.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { MedPortalComponent } from '../app-medportal/med-portal.component';
import { MedPortalPerfilComponent } from '../app-medportal/perfil/med-portal-perfil.component';
import { AgendaComponent } from '../app-medportal/agenda/agenda.component';

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
  path: 'med-portal', 
  component: MedPortalComponent,
  children: [
    {
      path: 'perfil',
      component: MedPortalPerfilComponent
    },
    {
      path: 'agenda',
      component: AgendaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
