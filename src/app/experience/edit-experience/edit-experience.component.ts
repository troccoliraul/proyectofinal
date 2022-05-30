import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/models/experience/experience.module';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  experience: Experience = null;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.experienceService.detail(id).subscribe(
      data => {
        this.experience = data;
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
    this.experienceService.update(id, this.experience).subscribe(
      data => {

        this.router.navigate(['/home']);
      },
      err => {

        this.router.navigate(['/home']);
      }
    );
  }

}
