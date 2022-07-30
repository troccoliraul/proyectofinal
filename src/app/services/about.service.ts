import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from 'src/app/models/about/about.module'

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  aboutURL = 'https://arcane-river-72538.herokuapp.com/persona/';

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<About> {
    return this.httpClient.get<About>(this.aboutURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<About> {
    return this.httpClient.get<About>(this.aboutURL + `detailname/${nombre}`);
  }
  public lista(): Observable<About[]> {
    return this.httpClient.get<About[]>(this.aboutURL + 'lista');
  }

  public save(about: About): Observable<any> {
    return this.httpClient.post<any>(this.aboutURL + 'create', about);
  }

  public update(id: number, producto: About): Observable<any> {
    return this.httpClient.put<any>(this.aboutURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.aboutURL + `delete/${id}`);
  }


}
