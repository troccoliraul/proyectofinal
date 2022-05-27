import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/models/experience/experience.module'
import { ExperienceService } from 'src/app/services/experience.service'

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  nom_empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  trabajo_actual: string;

  constructor(
    private experienceService: ExperienceService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.nom_empresa, this.fecha_inicio,this.fecha_fin, this.descripcion, this.trabajo_actual);
    this.experienceService.save(experience).subscribe(
      data => {

        this.router.navigate(['/']);
      },
      err => {

        this.router.navigate(['/']);
      }
    );
  }

}
