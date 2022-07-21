import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Hss } from 'src/app/models/hss';
import { HssService } from '../../services/hss.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-hss',
  templateUrl: './list-hss.component.html',
  styleUrls: ['./list-hss.component.css']
})
export class ListHssComponent implements OnInit {

  hsss: Hss[] = [];
  isAdmin = false;
  roles: string[];

  constructor(
  private tokenService: TokenService,
  private hssService: HssService,
  private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.cargarHss();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarHss(): void {
    this.hssService.lista().subscribe(
      data => {
        this.hsss = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.hssService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarHss();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  alert(id: number){
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
        ) ;this.borrar(id)
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
