import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "../shared/calculator.service";
import {MessageService} from "primeng/api";
import {IdealBodyWeightReqDto} from "../shared/IdealBodyWeightReqDto";
import {IdealBodyWeightRespDto} from "../shared/IdealBodyWeightRespDto";

@Component({
  selector: 'app-ideal-bodyweight',
  templateUrl: './ideal-bodyweight.component.html',
  styleUrls: ['./ideal-bodyweight.component.css']
})
export class IdealBodyweightComponent implements OnInit {

  //TODO unit change to metric fix

  units: any[] = [];
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  selectedUnit: any = {};
  selectedGender: any = {};
  feet: any;
  inches: any;
  idealBodyweightReq: IdealBodyWeightReqDto = {};
  idealBodyweightResp: IdealBodyWeightRespDto = {};
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
    this.idealBodyweightReq.unitsystem = this.selectedUnit.name;
    this.idealBodyweightReq.sex = this.selectedGender.type;
    this.idealBodyweightReq.inches = this.inches;
    this.idealBodyweightReq.feet = this.feet;

    this.calculatorService.idealBodyWeightCalc(this.idealBodyweightReq).subscribe(data => {
      if(data.success) {
        this.idealBodyweightResp = data.data;
        this.showResult = true;
        console.log('kir: ', this.idealBodyweightResp)
      } else {
        this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
      }
    })
  }
}
