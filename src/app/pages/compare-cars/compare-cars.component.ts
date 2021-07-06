import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.scss']
})
export class CompareCarsComponent implements OnInit, OnDestroy {

  cars: Car[];
  arrSelectedCars: Car[];
  subscription: Subscription;

  constructor(private carService: CarService) {
    this.cars = [];
    this.arrSelectedCars = [];
  }

  ngOnInit(): void {
    this.carService.list().subscribe(response => {
      this.cars = response;
      this.sortOnAlpha();
    });
    // Observable:
    this.getCars();
  }

  sortOnAlpha() {
    let field = 'manufacturer';
    this.cars.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));
  }

  onChange($event) {
    const selectedCar: Car = this.getSelectedCar($event.target.value);
    this.arrSelectedCars.push(selectedCar);
    this.arrSelectedCars.splice(3, 1);
  }

  getSelectedCar(pCar): Car {
    return this.cars.find(car => car.model === pCar);
  }

  // Observable:
  getCars() {
    this.subscription = this.carService.getCars$()
      .subscribe(response => {
        console.log(response);
        this.cars = response;
        console.log(this.cars);
      });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
