import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education/education.module'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educationURL = 'https://arcane-river-72538.herokuapp.com/educacion/';

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.educationURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Education> {
    return this.httpClient.get<Education>(this.educationURL + `detailname/${nombre}`);
  }
  public lista(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.educationURL + 'lista');
  }

  public save(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.educationURL + 'create', education);
  }

  public update(id: number, producto: Education): Observable<any> {
    return this.httpClient.put<any>(this.educationURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educationURL + `delete/${id}`);
  }
}

