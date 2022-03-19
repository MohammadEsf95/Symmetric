import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength-standards',
  templateUrl: './strength-standards.component.html',
  styleUrls: ['./strength-standards.component.css']
})
export class StrengthStandardsComponent implements OnInit {

  units: any[] = [];
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  selectedUnit: any = {};
  selectedGender: any = {};
  bodyWeight: any;
  age: any;

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
