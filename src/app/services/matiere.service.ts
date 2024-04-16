import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './auth/token.service';
import { URL_API } from '../config';
import { Observable } from 'rxjs';
import { Matiere } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private _httpClient: HttpClient,
    private tokenService: TokenService) { }

  url = `${URL_API}/matiere`;

  getAllMatieres():Observable<Matiere[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //this.tokenService.getHeaders();
    return this._httpClient.get<Matiere[]>(this.url, {headers})
  }

  addMatiere(matiere: Matiere):Observable<Matiere>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.post<Matiere>(this.url, matiere, {headers})
  }


 getMatiereById(id :number) : Observable<Matiere> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.url}/${id}`
    return this._httpClient.get<Matiere>(url, {headers})
  }

  updateMatiere(id :number) : Observable<Matiere> {
     const headers = new HttpHeaders({
       'Content-Type': 'application/json'
     });
     const url = `${this.url}/${id}`
     return this._httpClient.put<Matiere>(url, {headers})
   }

   deleteMatiere(id : number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.url}/${id}`
    return this._httpClient.delete(url, {headers})
   }



}
