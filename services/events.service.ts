import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) {}

  getEvents() {
    return this.http.get('https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events')
      .pipe(
        retry(2),
        // @ts-ignore
        catchError(this.handleError))
  }

  getEventsById(id: string) {
    return this.http.get(`https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/${id}/theaters`)
      .pipe(
        retry(2),
        // @ts-ignore
        catchError(this.handleError))
  }
}
