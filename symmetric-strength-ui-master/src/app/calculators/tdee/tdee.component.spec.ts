import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeComponent } from './tdee.component';

describe('TdeeComponent', () => {
  let component: TdeeComponent;
  let fixture: ComponentFixture<TdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
