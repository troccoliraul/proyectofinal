import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { ListEducationComponent } from './education/list-education/list-education.component';
import { ListHeaderComponent } from './header/list-header/list-header.component';
import { EditHeaderComponent } from './header/edit-header/edit-header.component';
import { AddHeaderComponent } from './header/add-header/add-header.component';
import { ListAboutComponent } from './about/list-about/list-about.component';
import { AddAboutComponent } from './about/add-about/add-about.component';
import { EditAboutComponent } from './about/edit-about/edit-about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { ListExperienceComponent } from './experience/list-experience/list-experience.component';
import { ListHssComponent } from './hss/list-hss/list-hss.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { ListLoginComponent } from './login/list-login/list-login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AddEducationComponent,
    EditEducationComponent,
    ListEducationComponent,
    ListHeaderComponent,
    EditHeaderComponent,
    AddHeaderComponent,
    ListAboutComponent,
    AddAboutComponent,
    EditAboutComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    ListExperienceComponent,
    ListHssComponent,
    AddProjectComponent,
    ListProjectComponent,
    ListLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
