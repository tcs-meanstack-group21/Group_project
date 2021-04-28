import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOrderStatusComponent } from './employee-order-status.component';

describe('EmployeeOrderStatusComponent', () => {
  let component: EmployeeOrderStatusComponent;
  let fixture: ComponentFixture<EmployeeOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
