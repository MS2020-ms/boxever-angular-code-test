import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  list(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>('/data/cars.json');
  }
}
