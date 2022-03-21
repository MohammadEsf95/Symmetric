import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rm-calculator',
  templateUrl: './rm-calculator.component.html',
  styleUrls: ['./rm-calculator.component.css']
})
export class RmCalculatorComponent implements OnInit {

  reps: any;
  weight: any;

  constructor() { }

  ngOnInit(): void {
  }

}
