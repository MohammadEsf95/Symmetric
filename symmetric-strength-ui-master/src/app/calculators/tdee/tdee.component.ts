import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdee',
  templateUrl: './tdee.component.html',
  styleUrls: ['./tdee.component.css']
})
export class TdeeComponent implements OnInit {

  units: any[] = [];
  activityLevels: any[] = [];
  selectedActivity: any = {};
  selectedUnit: any = {};
  selectedGender: any = {};
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  age: any;
  bodyWeight: any;
  bodyFat: any;
  feet: any;
  inches: any;

  constructor() {
    this.units = [
      {name: 'Metric', label: 'KG'},
      {name: 'Imperial', label: 'LBS'}
    ]


    this.activityLevels = [
      {name: 'Inactive', label: 'Extremely inactive (bed-ridden)'},
      {name: 'Sedentary', label: 'Sedentary (office worker, little or no exercise)'},
      {name: 'Average', label: 'Average (some exercise throughout the week)'},
      {name: 'Moderately active', label: 'Moderately active (physical job or an hour of exercise daily)'},
      {name: 'Vigorously active', label: 'Vigorously active (very physical job or two hours of exercise daily)'},
      {name: 'Extremely active', label: 'Extremely active (competitive endurance athlete)'},
    ]
  }

  ngOnInit(): void {
    this.selectedUnit = this.units[0];
    this.selectedGender = this.genders[0];
    this.selectedActivity = this.activityLevels[2];
  }

}
