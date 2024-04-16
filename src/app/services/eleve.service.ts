import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Eleve } from '../models';
import { URL_API } from '../config';
import { TokenService } from './auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class EleveService {


  constructor(private _httpClient: HttpClient,
    private tokenService: TokenService) { }

  url = `${URL_API}/eleve`;

  getAllEleve():Observable<Eleve[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //this.tokenService.getHeaders();
    return this._httpClient.get<Eleve[]>(this.url, {headers})
  }

  addEleve(eleve: Eleve):Observable<Eleve>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.post<Eleve>(this.url, eleve, {headers})
  }


 getEleveById(id :number) : Observable<Eleve> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.url}/${id}`
    return this._httpClient.get<Eleve>(url, {headers})
  }

  updateEleve(id :number) : Observable<Eleve> {
     const headers = new HttpHeaders({
       'Content-Type': 'application/json'
     });
     const url = `${this.url}/${id}`
     return this._httpClient.put<Eleve>(url, {headers})
   }

   deleteEleve(id : number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.url}/${id}`
    return this._httpClient.delete<any>(url, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
   }


}
