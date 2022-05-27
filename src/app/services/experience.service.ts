import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience/experience.module';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceURL = 'http://localhost:8080/exlaboral/';

  constructor(private httpClient: HttpClient) { }

    public detail(id: number): Observable<Experience> {
      return this.httpClient.get<Experience>(this.experienceURL + `detail/${id}`);
    }

    public detailName(nombre: string): Observable<Experience> {
      return this.httpClient.get<Experience>(this.experienceURL + `detailname/${nombre}`);
    }
    public lista(): Observable<Experience[]> {
      return this.httpClient.get<Experience[]>(this.experienceURL + 'lista');
    }

    public save(education: Experience): Observable<any> {
      return this.httpClient.post<any>(this.experienceURL + 'create', education);
    }

    public update(id: number, producto: Experience): Observable<any> {
      return this.httpClient.put<any>(this.experienceURL + `update/${id}`, producto);
    }

    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.experienceURL + `delete/${id}`);
    }




  }
