import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PostulantComponent } from '../postulant/postulant.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { MedPortalComponent } from '../app-medportal/med-portal.component';
import { MedPortalPerfilComponent } from '../app-medportal/perfil/med-portal-perfil.component';
import { AgendaScheduleComponent } from '../app-medportal/agenda/agenda-schedule/agenda-schedule.component';
import { AgendaConfigurationComponent } from '../app-medportal/agenda/agenda-configuration/agenda-configuration.component';

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
      children: [
        {
          path: 'schedule',
          component: AgendaScheduleComponent
        },
        {
          path: 'config',
          component: AgendaConfigurationComponent
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
