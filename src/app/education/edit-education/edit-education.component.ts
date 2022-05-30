import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education/education.module';
import { EducacionService } from 'src/app/services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  education: Education = null;

  constructor(
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.educacionService.detail(id).subscribe(
      data => {
        this.education = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/home']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.educacionService.update(id, this.education).subscribe(
      data => {

        this.router.navigate(['/home']);
      },
      err => {

        this.router.navigate(['/home']);
      }
    );
  }

}
