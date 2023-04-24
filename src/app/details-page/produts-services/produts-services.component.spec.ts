import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsServicesComponent } from './produts-services.component';

describe('ProdutsServicesComponent', () => {
  let component: ProdutsServicesComponent;
  let fixture: ComponentFixture<ProdutsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
