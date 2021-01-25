import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPortalComponent } from './med-portal.component';

describe('MedPortalComponent', () => {
  let component: MedPortalComponent;
  let fixture: ComponentFixture<MedPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
