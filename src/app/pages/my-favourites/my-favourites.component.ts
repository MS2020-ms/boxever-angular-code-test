import { CarService } from './../../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.scss']
})
export class MyFavouritesComponent implements OnInit {
  cars = [];
  favouriteCars = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.list().subscribe(response => {
      this.cars = response;
      const storedFavourites = localStorage.getItem('favouriteCars');
      this.updateFavourites(storedFavourites);
    });
  }

  removeFromFavourites(ref) {
    let favourites = JSON.parse(localStorage.getItem('favouriteCars'));
    const refIndex = favourites.indexOf(ref);
    favourites.splice(refIndex, 1);
    const newFavourites = JSON.stringify(favourites);
    localStorage.setItem('favouriteCars', newFavourites);
    this.updateFavourites(newFavourites);
  }

  updateFavourites(favourites) {
    this.favouriteCars = [];
    const favouritesArray = JSON.parse(favourites);
    if (favouritesArray && favouritesArray.length) {
      favouritesArray.forEach(ref => {
        const carInfo = this.cars.find(car => car.ref === ref);
        this.favouriteCars.push(carInfo);
      });
    }
  }

}
