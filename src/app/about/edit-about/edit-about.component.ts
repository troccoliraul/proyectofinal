import { Component, OnInit, Input } from '@angular/core';
import { EditaboutService } from 'src/app/services/editabout.service'

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  constructor(private modalSS: EditaboutService) { }

  ngOnInit(): void {
  }


  closeModal(){
    this.modalSS.$modal.emit(false);

  }



}
