import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { Agenda, AgendaHttpResponse } from '../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private apiUri = 'http://localhost:8081/v0.1/scheduleapi/agenda'; // URL to web api

  httpOption = {
    headers: new HttpHeaders({'Content-type': 'application/json'}),
    params: new HttpParams({})
  }

  constructor(
    private http: HttpClient
  ) { }

  getAgendas(doctor: any): Observable<AgendaHttpResponse>{
    return this.http.get<AgendaHttpResponse>(this.apiUri + `/byDoctor/${doctor.id}`, this.httpOption)
      .pipe(
        catchError(this.handleError)
      );
  }

  newAgenda(agenda: Agenda): Observable<AgendaHttpResponse>{
    return this.http.post<AgendaHttpResponse>(this.apiUri, agenda, this.httpOption)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAgenda(agenda: Agenda): Observable<AgendaHttpResponse>{
    return this.http.delete<AgendaHttpResponse>(this.apiUri + `/${agenda._id}`, this.httpOption)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
