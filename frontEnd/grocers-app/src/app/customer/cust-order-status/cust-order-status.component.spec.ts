import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustOrderStatusComponent } from './cust-order-status.component';

describe('CustOrderStatusComponent', () => {
  let component: CustOrderStatusComponent;
  let fixture: ComponentFixture<CustOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
