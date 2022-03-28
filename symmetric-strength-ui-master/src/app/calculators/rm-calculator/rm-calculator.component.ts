import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../shared/calculator.service";
import {RmCalcReqDto} from "../shared/RmCalcReqDto";
import {datepickerAnimation} from "ngx-bootstrap/datepicker/datepicker-animations";
import {MessageService} from "primeng/api";
import {RmCalcRespDto} from "../shared/RmCalcRespDto";

@Component({
  selector: 'app-rm-calculator',
  templateUrl: './rm-calculator.component.html',
  styleUrls: ['./rm-calculator.component.css']
})
export class RmCalculatorComponent implements OnInit {

  reps: any;
  weight: any;
  rmCalcDtoReq: RmCalcReqDto = {};
  rmCalcDtoResp: RmCalcRespDto = {};
  resultShow: boolean = false;

  constructor(
    private calculatorService: CalculatorService,
    private toastr: MessageService
  )
  {

  }

  ngOnInit(): void {
  }

  submit() {
    this.rmCalcDtoReq.reps = this.reps;
    this.rmCalcDtoReq.weight = this.weight;
    this.calculatorService.oneRmCalc(this.rmCalcDtoReq).subscribe(data => {
      if(data.success) {
        this.rmCalcDtoResp = data.data
        this.resultShow = true;
        console.log('kir: ', this.rmCalcDtoResp)
      } else {
        this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
      }
    })
  }
}
