import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './about/edit-about/edit-about.component';
import { AddAboutComponent } from './about/add-about/add-about.component';
import { ListAboutComponent } from './about/list-about/list-about.component';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { ListEducationComponent } from './education/list-education/list-education.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { ListExperienceComponent } from './experience/list-experience/list-experience.component';
import { ListHeaderComponent } from './header/list-header/list-header.component';
import { ListHssComponent } from './hss/list-hss/list-hss.component';
import { ListLoginComponent } from './login/list-login/list-login.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component'
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './login/registro/registro.component';



const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'home/editabout/:id', component: EditAboutComponent},
  {path: 'home/addabout', component: AddAboutComponent},
  {path: 'home/listabout', component: ListAboutComponent},
  {path: 'home/addeducation', component: AddEducationComponent},
  {path: 'home/editeducation/:id', component: EditEducationComponent},
  {path: 'home/listeducation', component: ListEducationComponent},
  {path: 'home/addexperience', component: AddExperienceComponent},
  {path: 'home/editexperience/:id', component: EditExperienceComponent},
  {path: 'home/listexperience', component: ListExperienceComponent},
  {path: 'home/listheader', component: ListHeaderComponent},
  {path: 'home/listhss', component: ListHssComponent},
  {path: 'login', component: ListLoginComponent},
  {path: 'home/listproject', component: ListProjectComponent},
  {path: 'home/addproject', component: AddProjectComponent},
  {path: 'home/editproject/:id', component: EditProjectComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
