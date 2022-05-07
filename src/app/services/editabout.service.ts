import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditaboutService {

  constructor() { }

   $modal = new EventEmitter<any>();
}
