import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Experience } from 'src/app/models/experience/experience.module'
import { ExperienceService } from 'src/app/services/experience.service'

@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.css']
})
export class ListExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarExperince();
  }

  cargarExperince(): void {
    this.experienceService.lista().subscribe(
      data => {
        this.experiences = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienceService.delete(id).subscribe(
      data => {

        this.cargarExperince();
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
