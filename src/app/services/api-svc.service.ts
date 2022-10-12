import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiSvcService {

  endpoint = 'http://192.168.163.225/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getStatus(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + '/status')
      .pipe(
        catchError(this.handleError<any>('error'))
      )
  }

  sendHandling(): Observable<any> {
    return  this.httpClient.post<any>(this.endpoint + '/handling', {})
      .pipe(
        catchError(this.handleError<any>('error'))
      )
  }

  sendDecline(): Observable<any> { 
    return this.httpClient.post<any>(this.endpoint + '/deline', {})
      .pipe(
        catchError(this.handleError<any>('error'))
      )
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
