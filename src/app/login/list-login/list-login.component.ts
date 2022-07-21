import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../services/token.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-login',
  templateUrl: './list-login.component.html',
  styleUrls: ['./list-login.component.css']
})
export class ListLoginComponent implements OnInit {
  form : FormGroup;
  error : String="";
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;


   constructor(
    private formBuilder :FormBuilder,
    private tokenService: TokenService,
    private authService: LoginService,
    private router: Router,
    private toastr: ToastrService

    ) {
     this.form = this.formBuilder.group({
      nombreUsuario : ['',[Validators.required]],//, Validators.email]],
       password : ['', [Validators.required, Validators.minLength(4)]],


     });
   }

   ngOnInit(): void {
   }
    get Email ()
    {
       return this.form.get('nombreUsuario');
    }

    get Password (){
     return this.form.get('password');
    }


    onLogin(): void {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe(
        data => {
          this.isLogged = true;

          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/home']);
        },
        err => {
          this.isLogged = false;
          this.errMsj = err.error.message;
          this.toastr.error(this.errMsj, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          // console.log(err.error.message);
        }
      );
    }


 }
