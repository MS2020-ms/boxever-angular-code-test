import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // Observable:
  carsList: Car[];
  carsList$: Subject<Car[]>;

  constructor(private http: HttpClient) {

    // Observable:
    this.carsList = [];
    this.carsList$ = new Subject();
  }

  list(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>('/data/cars.json');
  }


  // Observable:
  reciveCarsArr(pCarsArr: Car[]) {
    this.carsList = pCarsArr;
    this.carsList$.next(this.carsList);
  }
  getCars$(): Observable<Car[]> {
    return this.carsList$.asObservable();
  }
}
