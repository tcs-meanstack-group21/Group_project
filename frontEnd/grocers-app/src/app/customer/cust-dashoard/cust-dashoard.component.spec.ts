import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDashoardComponent } from './cust-dashoard.component';

describe('CustDashoardComponent', () => {
  let component: CustDashoardComponent;
  let fixture: ComponentFixture<CustDashoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDashoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
