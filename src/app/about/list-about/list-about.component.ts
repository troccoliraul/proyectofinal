import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about/about.module';
import { AboutService } from 'src/app/services/about.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-about',
  templateUrl: './list-about.component.html',
  styleUrls: ['./list-about.component.css']
})
export class ListAboutComponent implements OnInit {

  abouts: About[] = [];

  constructor(
    private aboutService: AboutService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarAbout();
  }

  cargarAbout(): void {
    this.aboutService.lista().subscribe(
      data => {
        this.abouts = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.aboutService.delete(id).subscribe(
      data => {

        this.cargarAbout();
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
