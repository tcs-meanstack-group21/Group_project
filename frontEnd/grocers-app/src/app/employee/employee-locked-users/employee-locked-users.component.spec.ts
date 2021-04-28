import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLockedUsersComponent } from './employee-locked-users.component';

describe('EmployeeLockedUsersComponent', () => {
  let component: EmployeeLockedUsersComponent;
  let fixture: ComponentFixture<EmployeeLockedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLockedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLockedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
