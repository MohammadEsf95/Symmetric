import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  units: any[] = [];
  selectedUnit: any = {};
  selectedValue: number = 0;
  values : any[] = [];


  constructor() {
    this.units = [
      {name: 'Metric', label: 'KG'},
      {name: 'Imperial', label: 'LBS'}
    ]

    this.values = [
      {number: 1, unit: 'KG'},
      {number: 2.5, unit: 'KG'},
      {number: 5, unit: 'KG'},
      {number: 10, unit: 'KG'}
    ]
  }

  ngOnInit(): void {
    this.selectedUnit = this.units[0];
  }

  changeUnit(event: any) {
    if(event.value.name == 'Metric') {
      this.values = [
        {number: 1, unit: 'KG'},
        {number: 2.5, unit: 'KG'},
        {number: 5, unit: 'KG'},
        {number: 10, unit: 'KG'}
      ]
    } else {
      this.values = [
        {number: 1, unit: 'LBS'},
        {number: 2.5, unit: 'LBS'},
        {number: 5, unit: 'LBS'},
        {number: 10, unit: 'LBS'}
      ]
    }
  }

  // changeValue(event: any) {
  //   this.selectedValue = event.value.number;
  //   console.log(this.selectedValue)
  //   // this.selectedValue = event.value.number + ' ' + this.selectedUnit.label
  // }
}
