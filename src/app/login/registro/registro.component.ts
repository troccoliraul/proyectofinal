import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form : FormGroup;
  error : String="";
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(
    private formBuilder :FormBuilder,
    private tokenService: TokenService,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email : ['',[Validators.required,  Validators.email]],
      nombreUsuario : ['',[Validators.required, Validators.minLength(4)]],
      nombre : ['',[Validators.required, Validators.minLength(4)]],
      password : ['', [Validators.required, Validators.minLength(4)]],
     });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }

  }

  get Email ()
    {
       return this.form.get('email');
    }

  get Password ()
    {
     return this.form.get('password');
    }

  get Nombre ()
    {
     return this.form.get('nombre');
    }

  get NombreUsuario ()
    {
     return this.form.get('nombreUsuario');
    }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.loginService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
  }

}
