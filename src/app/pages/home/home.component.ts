import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { SearchService } from 'src/app/services/search.service';
import { CarService } from './../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService, private searchService: SearchService) {
    this.cars = [];
  }

  ngOnInit(): void {
    this.carService.list().subscribe(response => {
      this.cars = response;
      this.sortOnAlpha();
      // Observable:
      this.sendCarsArr(this.cars);
    });

  }

  sortOnAlpha() {
    let field = 'manufacturer';
    this.cars.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));
  }

  sortHighestPrice() {
    this.cars.sort((a, b) =>
      b.price - a.price)
  }

  sortLowestPrice() {
    this.cars.sort((a, b) =>
      a.price - b.price)
  }

  // Observable:
  sendCarsArr(pCarsArr) {
    this.carService.reciveCarsArr(pCarsArr);
  }

  addToFavourites(ref) {
    this.cars.find(item => item.ref === ref).inFavourites = true;
    const existingFavourites = localStorage.getItem('favouriteCars');
    if (existingFavourites) {
      try {
        let list = JSON.parse(existingFavourites);
        let exist = false;
        for (let i = 0; i < list.length; i++)
          if (list[i] == ref) {
            exist = true;
            break;
          }
        const parsedFavourites = JSON.parse(existingFavourites);
        if (!exist) parsedFavourites.push(ref);
        localStorage.setItem('favouriteCars', JSON.stringify(parsedFavourites));
      } catch {
        throw ('Failed to parse favourites');
      }
    } else {
      localStorage.setItem('favouriteCars', JSON.stringify([ref]));
    }
  }

  onChange($event) {
    if ($event.target.value === 'manufacturerName') {
      this.sortOnAlpha();
    } else if ($event.target.value === 'lowestPrice') {
      this.sortLowestPrice();
    } else if ($event.target.value === 'highestPrice') {
      this.sortHighestPrice();
    };
  }

}


