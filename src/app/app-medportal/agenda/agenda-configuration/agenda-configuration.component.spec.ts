import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaConfigurationComponent } from './agenda-configuration.component';

describe('AgendaConfigurationComponent', () => {
  let component: AgendaConfigurationComponent;
  let fixture: ComponentFixture<AgendaConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
