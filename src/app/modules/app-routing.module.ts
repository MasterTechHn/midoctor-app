import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PostulantComponent } from '../postulant/postulant.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

const routes: Routes = [{ 
  path: '', redirectTo: '/index', pathMatch: 'full' 
},
{
  path: 'index', component: LandingPageComponent
},
{
  path: 'apply', component: PostulantComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
