import { Component, OnInit } from '@angular/core';
import { CarService } from './../../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.list().subscribe(response => {
      this.cars = response;
    });
  }

  addToFavourites(ref) {
    this.cars.find(item => item.ref === ref).inFavourites = true;
    const existingFavourites = localStorage.getItem('favouriteCars');
    if (existingFavourites) {
      try {
        const parsedFavourites = JSON.parse(existingFavourites);
        parsedFavourites.push(ref);
        localStorage.setItem('favouriteCars', JSON.stringify(parsedFavourites));
      } catch {
        throw('Failed to parse favourites');
      }
    } else {
      localStorage.setItem('favouriteCars', JSON.stringify([ref]));
    }
  }

}
