import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempNgContainer } from './ng-temp-ng-container';

describe('NgTempNgContainer', () => {
  let component: NgTempNgContainer;
  let fixture: ComponentFixture<NgTempNgContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempNgContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTempNgContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
