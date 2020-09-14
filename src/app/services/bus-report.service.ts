import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { BusReportModel, ReportData } from '../models/bus-report';

@Injectable({
  providedIn: 'root'
})
export class BusReportService {

  constructor(
    private http: HttpClient
  ) { }

  getBusReports(): Observable<BusReportModel> {
     return this.http.get<BusReportModel>('assets/bus-services-data.json')
         .pipe(
           retry(1),
           catchError(this.handleError)
         );
  }

  saveNotes(data: ReportData): Observable<boolean> {
    let isSuccess = false;
    // in this case use local storage instead of using endpoint to save notes
    localStorage.setItem('ReportData', JSON.stringify(data));
    isSuccess = true;
    return of(isSuccess);
  }

  handleError(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-Side Error: ${error.error.message}`;
    } else {
      errorMessage = `Server-Side Error: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
