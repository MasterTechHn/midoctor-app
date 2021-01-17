import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { Postulant } from '../interfaces/postulant';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  private apiUri = 'http://localhost:8080/v0.1/medapi/apply'; // URL to web api

  httpOption = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  applyPostulant(postulant: Postulant): Observable<Postulant>{
    return this.http.post<Postulant>(this.apiUri, postulant, this.httpOption)
  }
}
