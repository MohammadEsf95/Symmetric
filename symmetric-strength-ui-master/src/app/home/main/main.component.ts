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
  selectedCategories: any[] = [];
  squats: any[] = [{name: 'Back Squat', key: 'A'}, {name: 'Front Squad', key: 'M'}];
  floorPull: any[] = [{name: 'Deadlift', key: 'D'}, {name: 'Sumo Deadlift', key: 'SD'}, {name: 'Power Clean', key: 'PC'}];
  horizontalPress: any[] = [{name: 'Bench Press', key: 'BP'}, {name: 'Incline Bench Press', key: 'IBP'}, {name: 'Dip', key: 'Di'}];
  verticalPress: any[] = [{name: 'Overhead Press', key: 'OP'}, {name: 'Push Press', key: 'PP'}, {name: 'Snatch Press', key: 'Sp'}];
  pullUps: any[] = [{name: 'Chin-up', key: 'Cu'}, {name: 'Pull-up', key: 'Pu'}, {name: 'Pendlay Row', key: 'Pr'}];
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  value8: any;
  bodyWeight: any;
  age: any;


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
