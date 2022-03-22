import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideal-bodyweight',
  templateUrl: './ideal-bodyweight.component.html',
  styleUrls: ['./ideal-bodyweight.component.css']
})
export class IdealBodyweightComponent implements OnInit {

  units: any[] = [];
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  selectedUnit: any = {};
  selectedGender: any = {};
  feet: any;
  inches: any;

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
