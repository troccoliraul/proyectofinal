import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../services/token.service';
import { Education } from '../models/education/education.module'
import { EducacionService } from '../services/educacion.service'
import { Experience } from '../models/experience/experience.module'
import { ExperienceService } from '../services/experience.service'
import { Project } from '../models/projects/projects.module';
import { ProjectsService } from '../services/projects.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  education: Education[] = [];
  experience: Experience[] = [];
  project: Project[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private educacionService: EducacionService,
    private experienceService: ExperienceService,
    private projectsService: ProjectsService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarProductos(): void {
    this.educacionService.lista().subscribe(
      data => {
        this.education = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educacionService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
