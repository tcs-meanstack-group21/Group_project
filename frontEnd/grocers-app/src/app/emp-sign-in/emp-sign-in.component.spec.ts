import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSignInComponent } from './emp-sign-in.component';

describe('EmpSignInComponent', () => {
  let component: EmpSignInComponent;
  let fixture: ComponentFixture<EmpSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
