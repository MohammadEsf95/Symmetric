import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "../shared/calculator.service";
import {MessageService} from "primeng/api";
import {WilksCalcReqDto} from "../shared/WilksCalcReqDto";
import {WilksCalcRespDto} from "../shared/WilksCalcRespDto";

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
  benchPressReps: any;
  deadliftReps: any;
  wilksCalcReq: WilksCalcReqDto = {};
  wilksCalcResp: WilksCalcRespDto = {};
  showResult: boolean = false;

  constructor(
    private calculatorService: CalculatorService,
    private toastr: MessageService
  ) {
    this.units = [
      {name: 'Metric', label: 'KG'},
      {name: 'Imperial', label: 'LBS'}
    ]
  }

  ngOnInit(): void {
    this.selectedUnit = this.units[0];
    this.selectedGender = this.genders[0];
  }

  submit() {
    this.wilksCalcReq.bodyweight = this.bodyWeight;
    this.wilksCalcReq.sex = this.selectedGender.type;
    this.wilksCalcReq.unitsystem = this.selectedUnit.name;
    this.wilksCalcReq.liftfields = {
      backSquat: {
        weight: this.backSquatWeight,
        reps: this.backSquatReps
      },
      benchPress: {
        weight: this.benchPressWeight,
        reps: this.benchPressReps
      },
      deadlift: {
        weight: this.deadlift,
        reps: this.deadliftReps
      }
    }

    this.calculatorService.wilksCalc(this.wilksCalcReq).subscribe(data => {
      if(data.success) {
        this.wilksCalcResp = data.data;
        this.showResult = true;
      } else {
        this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
      }
    })

    // this.liftFieldsDto.backSquat = {
    //   liftName: 'Back Squat',
    //   checked: true,
    //   weight: this.deadlift,
    //   reps: this.backSquatReps,
    // }
    // this.liftFieldsDto.deadlift = {
    //   liftName: 'Deadlift',
    //   checked: true,
    //   weight: this.deadlift,
    //   reps: this.backSquatReps,
    // }
  }
}
