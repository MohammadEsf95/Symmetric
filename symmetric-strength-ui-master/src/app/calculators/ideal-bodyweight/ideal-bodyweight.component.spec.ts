import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealBodyweightComponent } from './ideal-bodyweight.component';

describe('IdealBodyweightComponent', () => {
  let component: IdealBodyweightComponent;
  let fixture: ComponentFixture<IdealBodyweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealBodyweightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealBodyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
