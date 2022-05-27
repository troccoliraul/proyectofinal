import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/projects/projects.module';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectURL = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { }



  public detail(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.projectURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Project> {
    return this.httpClient.get<Project>(this.projectURL + `detailname/${nombre}`);
  }
  public lista(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectURL + 'lista');
  }

  public save(education: Project): Observable<any> {
    return this.httpClient.post<any>(this.projectURL + 'create', education);
  }

  public update(id: number, producto: Project): Observable<any> {
    return this.httpClient.put<any>(this.projectURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.projectURL + `delete/${id}`);
  }



}
