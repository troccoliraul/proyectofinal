import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Project } from 'src/app/models/projects/projects.module';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private projectsService: ProjectsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.projectsService.lista().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.projectsService.delete(id).subscribe(
      data => {

        this.cargarProyecto();
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
