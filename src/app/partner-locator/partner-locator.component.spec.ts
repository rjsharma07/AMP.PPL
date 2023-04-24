import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLocatorComponent } from './partner-locator.component';

describe('PartnerLocatorComponent', () => {
  let component: PartnerLocatorComponent;
  let fixture: ComponentFixture<PartnerLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerLocatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
