import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilkComponent } from './wilk.component';

describe('WilkComponent', () => {
  let component: WilkComponent;
  let fixture: ComponentFixture<WilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
