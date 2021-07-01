import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  list(): Observable<Array<any>> {
    return this.http.get<Array<any>>('/data/cars.json');
  }
}
