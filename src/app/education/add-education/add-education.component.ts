import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education/education.module';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  centro: string;
  titulo: string;
  anio_ingreso: string;
  anio_egreso: string;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Education(this.centro, this.titulo,this.anio_ingreso, this.anio_egreso);
    this.educacionService.save(educacion).subscribe(
      data => {

        this.router.navigate(['/home']);
      },
      err => {

        this.router.navigate(['/home']);
      }
    );
  }

}
