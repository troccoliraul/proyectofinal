import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hss } from '../../models/hss';
import {HssService} from '../../services/hss.service'

@Component({
  selector: 'app-hss-edit',
  templateUrl: './hss-edit.component.html',
  styleUrls: ['./hss-edit.component.css']
})
export class HssEditComponent implements OnInit {

  hss: Hss = null;

  constructor(
    private hssService: HssService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.hssService.detail(id).subscribe(
      data => {
        this.hss = data;
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
    this.hssService.update(id, this.hss).subscribe(
      data => {

        this.router.navigate(['/home']);
      },
      err => {

        this.router.navigate(['/home']);
      }
    );
  }

}
