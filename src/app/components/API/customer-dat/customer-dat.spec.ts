import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDat } from './customer-dat';

describe('CustomerDat', () => {
  let component: CustomerDat;
  let fixture: ComponentFixture<CustomerDat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
