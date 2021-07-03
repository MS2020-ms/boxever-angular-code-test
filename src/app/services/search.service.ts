import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getByLowestPrice(pLPrice): Observable<Array<Car>> {
    return
  }

  getByHighestPrice(pHPrice): Observable<Array<Car>> {
    return
  }
}

