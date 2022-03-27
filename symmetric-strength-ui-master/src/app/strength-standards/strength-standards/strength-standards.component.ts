import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StrengthStandardService} from "./shared/strength-standard.service";
import {StandardDto} from "./shared/StandardDto";
import {StandardResponseDto} from "./shared/StandardResponseDto";

@Component({
  selector: 'app-strength-standards',
  templateUrl: './strength-standards.component.html',
  styleUrls: ['./strength-standards.component.css']
})
export class StrengthStandardsComponent implements OnInit {

  response: StandardResponseDto = {};
  units: any[] = [];
  genders: any[] = [{type: 'Male'}, {type: 'Female'}];
  standardDto: StandardDto = {};
  selectedUnit: any = {};
  selectedGender: any = {};
  bodyWeight: any;
  age: any;
  standardStrengthFormGroup: FormGroup;
  repAndRoundFormGroup: FormGroup;
  standardsPage: boolean = false;
  reps: any = [];
  rounds: any = [];
  selectedRep: any = {};
  selectedRound: any = {};

  constructor(
    private builder: FormBuilder,
    private strengthStandardService: StrengthStandardService
    ) {
    this.units = [
      {name: 'Metric', label: 'KG'},
      {name: 'Imperial', label: 'LBS'}
    ]

    this.reps = [
      {value: 1, label: '1 rep maxes'},
      {value: 2, label: '2 rep maxes'},
      {value: 3, label: '3 rep maxes'},
      {value: 4, label: '4 rep maxes'},
      {value: 5, label: '5 rep maxes'},
      {value: 6, label: '6 rep maxes'},
      {value: 7, label: '7 rep maxes'},
      {value: 8, label: '8 rep maxes'},
      {value: 9, label: '9 rep maxes'},
      {value: 10, label: '10 rep maxes'},
    ]

    this.standardStrengthFormGroup = builder.group({
      unit : new FormControl(1, Validators.required),
      gender : new FormControl(1, Validators.required),
      bodyWeight : new FormControl(1, Validators.required),
      age : new FormControl(1, null)
    })

    this.repAndRoundFormGroup = builder.group({
      reps: new FormControl(1, null),
      round: new FormControl(1, null)
    })
  }

  ngOnInit(): void {
    this.selectedUnit = this.units[0];
    this.selectedGender = this.genders[0];
    this.selectedRep = this.reps[0];
    this.selectedRound = {value: 1, label: 1 + ' ' + this.selectedUnit.label};
  }

  submit() {
    this.rounds = [
      {value: 1, label: 1 + ' ' + this.selectedUnit.label},
      {value: 2.5, label: 2.5 + ' ' + this.selectedUnit.label},
      {value: 5, label: 5 + ' ' + this.selectedUnit.label},
      {value: 10, label: 10 + ' ' + this.selectedUnit.label},
    ]
    this.strengthStandardService.calculateStandard(this.selectedUnit.name, this.selectedGender.type, this.bodyWeight, this.age, this.selectedRep.value, this.selectedRound.value).subscribe(data => {
      if(data.success) {
        this.standardsPage = true;
        this.response = data.data;
      }
    })
  }

  onChangeRound(event: any) {
    this.selectedRound = event.value;
    this.submit();
  }

  onChangeRep(event: any) {
    this.selectedRep = event.value;
    this.submit();
  }
}
