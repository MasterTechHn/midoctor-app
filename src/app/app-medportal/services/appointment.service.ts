import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Appoitnment } from '../models/appoitnment';
import { HttpResponse } from '../models/httpResponse';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  private apiUri = 'http://localhost:8081/v0.1/scheduleapi/appointment'; // URL to web api

  httpOption = {
    headers: new HttpHeaders({'Content-type': 'application/json'}),
    params: new HttpParams({})
  }

  constructor(
    private http: HttpClient
  ) { }

  getAppointments(doctor: any): Observable<HttpResponse>{
    return this.http.get<HttpResponse>(this.apiUri + `/byAgenda/${doctor.id}`, this.httpOption)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
