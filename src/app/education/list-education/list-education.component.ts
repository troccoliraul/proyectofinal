import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education/education.module';
import { EducacionService } from 'src/app/services/educacion.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.css']
})
export class ListEducationComponent implements OnInit {

  educations: Education[] = [];

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(
      data => {
        this.educations = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educacionService.delete(id).subscribe(
      data => {

        this.cargarEducacion();
      },
      err => {

      }
    );
  }

}
