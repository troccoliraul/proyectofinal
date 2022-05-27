import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education/education.module';
import { EducacionService } from 'src/app/services/educacion.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'


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

  alert(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }


  }
