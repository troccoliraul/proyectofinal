import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hss } from 'src/app/models/hss';

@Injectable({
  providedIn: 'root'
})
export class HssService {

  hssURL = 'http://localhost:8080/hss/';

  constructor(private httpClient: HttpClient) { }

    public detail(id: number): Observable<Hss> {
      return this.httpClient.get<Hss>(this.hssURL + `detail/${id}`);
    }

    public detailName(nombre: string): Observable<Hss> {
      return this.httpClient.get<Hss>(this.hssURL + `detailname/${nombre}`);
    }
    public lista(): Observable<Hss[]> {
      return this.httpClient.get<Hss[]>(this.hssURL + 'lista');
    }

    public save(education: Hss): Observable<any> {
      return this.httpClient.post<any>(this.hssURL + 'create', education);
    }

    public update(id: number, producto: Hss): Observable<any> {
      return this.httpClient.put<any>(this.hssURL + `update/${id}`, producto);
    }

    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.hssURL + `delete/${id}`);
    }
}
