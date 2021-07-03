import { Component, OnInit } from '@angular/core';
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
    });

  }

  sortOnAlpha() {
    let field = 'manufacturer';
    this.cars.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));
  }

  sortHighestPrice() {
    let field = 'price';
    this.cars.sort((a, b) =>
      b.price - a.price)
  }

  sortLowestPrice() {
    let field = 'price';
    this.cars.sort((a, b) =>
      a.price - b.price)
  }

  addToFavourites(ref) {
    this.cars.find(item => item.ref === ref).inFavourites = true;
    //!
    const existingFavourites = localStorage.getItem('favouriteCars');
    if (existingFavourites) {
      try {
        const parsedFavourites = JSON.parse(existingFavourites);
        parsedFavourites.push(ref);
        localStorage.setItem('favouriteCars', JSON.stringify(parsedFavourites));
      } catch {
        throw ('Failed to parse favourites');
      }
    } else {
      localStorage.setItem('favouriteCars', JSON.stringify([ref]));
    }
  }

  onChange($event) {
    // console.log($event.target.value);
    if ($event.target.value === 'manufacturerName') {
      this.sortOnAlpha();
    } else if ($event.target.value === 'lowestPrice') {
      this.sortLowestPrice();
    } else if ($event.target.value === 'highestPrice') {
      this.sortHighestPrice();
    };
  }

}

  // testLocalStorage() {
  //   //!
  //   const existingFavourites = localStorage.getItem('favouriteCars');
  //   const parsedFavourites = JSON.parse(existingFavourites);

  //   console.log(parsedFavourites);

  //   for (let i = 0; i < parsedFavourites.length; i++) {

  //     console.log(parsedFavourites[i]);

  //     if (this.cars.find(item => item.ref === parsedFavourites[i])) {
  //       console.log('ok');

  //     }
  //   }
  // }


