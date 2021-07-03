import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: [
  ]
})
export class DropdownComponent implements OnInit {

  selectedOption: string;

  constructor() {
    this.selectedOption = 'all';
  }

  ngOnInit(): void {
  }

  onChange($event) {
    this.selectedOption = $event.target.value;
    console.log($event.target.value);
  }

}
