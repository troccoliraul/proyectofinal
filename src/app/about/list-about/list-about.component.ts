import { Component, OnInit } from '@angular/core';
import { EditaboutService } from 'src/app/services/editabout.service';

@Component({
  selector: 'app-list-about',
  templateUrl: './list-about.component.html',
  styleUrls: ['./list-about.component.css']
})
export class ListAboutComponent implements OnInit {

  modalSwtch: boolean | undefined;

  constructor(private modalSS: EditaboutService) { }

  ngOnInit(){

    this.modalSS.$modal.subscribe((valor)=> {this.modalSwtch = valor;})

  }

  editAbout(){
    this.modalSwtch = true;
  }

}
