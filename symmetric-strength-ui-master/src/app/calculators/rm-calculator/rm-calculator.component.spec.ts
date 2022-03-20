import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmCalculatorComponent } from './rm-calculator.component';

describe('RmCalculatorComponent', () => {
  let component: RmCalculatorComponent;
  let fixture: ComponentFixture<RmCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
