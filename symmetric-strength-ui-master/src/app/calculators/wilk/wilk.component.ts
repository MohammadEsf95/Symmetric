import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilk',
  templateUrl: './wilk.component.html',
  styleUrls: ['./wilk.component.css']
})
export class WilkComponent implements OnInit {

  units: any[] = [];
  selectedUnit: any = {};
  selectedGender: any = {};
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  bodyWeight: any;
  backSquatWeight: any;
  deadlift: any;
  benchPressWeight: any;
  backSquatReps: any;

  constructor() {
    this.units = [
      {name: 'Metric', label: 'KG'},
      {name: 'Imperial', label: 'LBS'}
    ]
  }

  ngOnInit(): void {
    this.selectedUnit = this.units[0];
    this.selectedGender = this.genders[0];
  }

}
