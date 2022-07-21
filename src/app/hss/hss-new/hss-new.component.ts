import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Hss } from '../../models/hss';
import { HssService } from '../../services/hss.service';



@Component({
  selector: 'app-hss-new',
  templateUrl: './hss-new.component.html',
  styleUrls: ['./hss-new.component.css']
})
export class HssNewComponent implements OnInit {

  percent: number;
  title: string;
  subtitle: string;

  constructor(
    private hssService: HssService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hss = new Hss(this.percent, this.title,this.subtitle);
    this.hssService.save(hss).subscribe(
      data => {

        this.router.navigate(['/home']);
      },
      err => {

        this.router.navigate(['/home']);
      }
    );
  }

}
