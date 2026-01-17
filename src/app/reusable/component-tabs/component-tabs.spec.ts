import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTabs } from './component-tabs';

describe('ComponentTabs', () => {
  let component: ComponentTabs;
  let fixture: ComponentFixture<ComponentTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
