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
import { EditHeaderComponent } from './header/edit-header/edit-header.component';
import { ListHssComponent } from './hss/list-hss/list-hss.component';
import { ListLoginComponent } from './login/list-login/list-login.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'editabout', component: EditAboutComponent},
  {path: 'addabout', component: AddAboutComponent},
  {path: 'listabout', component: ListAboutComponent},
  {path: 'addeducation', component: AddEducationComponent},
  {path: 'editeducation/:id', component: EditEducationComponent},
  {path: 'listeducation', component: ListEducationComponent},
  {path: 'addexperience', component: AddExperienceComponent},
  {path: 'editexperience', component: EditExperienceComponent},
  {path: 'listexperience', component: ListExperienceComponent},
  {path: 'listheader', component: ListHeaderComponent},
  {path: 'listhss', component: ListHssComponent},
  {path: 'editheader', component: EditHeaderComponent},
  {path: 'listlogin', component: ListLoginComponent},
  {path: 'listproject', component: ListProjectComponent},
  {path: 'addproject', component: AddProjectComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
