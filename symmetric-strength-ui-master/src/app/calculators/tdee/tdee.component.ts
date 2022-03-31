import { Component, OnInit } from '@angular/core';
import {TdeeReqDto} from "../shared/TdeeReqDto";
import {TdeeRespDto} from "../shared/TdeeRespDto";
import {CalculatorService} from "../shared/calculator.service";
import {MessageService} from "primeng/api";

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
  tdeeReq: TdeeReqDto = {};
  tdeeResp: TdeeRespDto = {};
  showResponse: boolean = false;
  centimeters: any;

  constructor(
    private calculatorService: CalculatorService,
    private toastr: MessageService
  ) {
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

  submit() {
    //TODO only works in imperial, fix metric
    this.tdeeReq.unitsystem = this.selectedUnit.name;
    this.tdeeReq.sex = this.selectedGender.type;
    this.tdeeReq.age = this.age;
    this.tdeeReq.activity_level = this.selectedActivity.name;
    this.tdeeReq.bodyweight = this.bodyWeight;
    this.tdeeReq.feet = this.feet;
    this.tdeeReq.inches = this.inches;
    this.tdeeReq.bodyfat = this.bodyFat;
    this.tdeeReq.centimeters = this.centimeters;

    this.calculatorService.tdeeCalc(this.tdeeReq).subscribe(data => {
      if(data.success) {
        this.tdeeResp = data.data;
        this.showResponse = true;
      } else {
        this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
      }
    })
  }
}
