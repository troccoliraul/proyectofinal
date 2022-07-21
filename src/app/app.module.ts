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
import { EditAboutComponent } from './about/edit-about/edit-about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { ListExperienceComponent } from './experience/list-experience/list-experience.component';
import { ListHssComponent } from './hss/list-hss/list-hss.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { ListLoginComponent } from './login/list-login/list-login.component';//*
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';//*
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//*
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { interceptorProvider } from './services/prod-interceptor.service';
import { RegistroComponent } from './login/registro/registro.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HssNewComponent } from './hss/hss-new/hss-new.component';
import { HssEditComponent } from './hss/hss-edit/hss-edit.component';



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
    EditAboutComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    ListExperienceComponent,
    ListHssComponent,
    AddProjectComponent,
    ListProjectComponent,
    ListLoginComponent,
    HomeComponent,
    EditProjectComponent,
    RegistroComponent,
    HssNewComponent,
    HssEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSliderModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
