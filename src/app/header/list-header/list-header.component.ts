import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent implements OnInit {

  title : string = 'Argentina Programa #YoProgramo';
  constructor() { }

  ngOnInit(): void {
  }

}
