import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { About } from 'src/app/models/about/about.module';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  about: About = null;

  constructor(
    private aboutService: AboutService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.aboutService.detail(id).subscribe(
      data => {
        this.about = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.aboutService.update(id, this.about).subscribe(
      data => {

        this.router.navigate(['/']);
      },
      err => {

        this.router.navigate(['/']);
      }
    );
  }


}
