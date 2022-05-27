import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/projects/projects.module';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  proyecto: string;
  url_proyecto: string;
  descripcion: string;

  constructor(
    private projectsService: ProjectsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const project = new Project(this.proyecto, this.url_proyecto,this.descripcion);
    this.projectsService.save(project).subscribe(
      data => {

        this.router.navigate(['/']);
      },
      err => {

        this.router.navigate(['/']);
      }
    );
  }

}
