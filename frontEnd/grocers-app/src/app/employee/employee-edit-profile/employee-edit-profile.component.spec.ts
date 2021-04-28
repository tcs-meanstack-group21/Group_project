import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditProfileComponent } from './employee-edit-profile.component';

describe('EmployeeEditProfileComponent', () => {
  let component: EmployeeEditProfileComponent;
  let fixture: ComponentFixture<EmployeeEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
