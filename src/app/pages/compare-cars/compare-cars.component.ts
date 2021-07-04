import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.scss']
})
export class CompareCarsComponent implements OnInit {

  cars: Car[];
  arrSelectedCars: Car[];

  constructor(private carService: CarService, private searchService: SearchService) {
    this.cars = [];
    this.arrSelectedCars = [];
  }

  ngOnInit(): void {
    this.carService.list().subscribe(response => {
      this.cars = response;
      this.sortOnAlpha();
    });

  }

  sortOnAlpha() {
    let field = 'manufacturer';
    this.cars.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));
  }

  onChange($event) {
    const selectedCar: Car = this.getSelectedCar($event.target.value);
    this.arrSelectedCars.push(selectedCar);
  }

  getSelectedCar(pCar): Car {
    return this.cars.find(car => car.model === pCar);
    // return car;
  }

  // var numbers = [1, 2, 3, 4, 5];
  // if (numbers.length > 3) {
  //   numbers.length = 3;
  // }
  // console.log(numbers); // [1, 2, 3]

}
