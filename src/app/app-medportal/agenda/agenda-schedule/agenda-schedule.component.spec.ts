import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaScheduleComponent } from './agenda-schedule.component';

describe('AgendaScheduleComponent', () => {
  let component: AgendaScheduleComponent;
  let fixture: ComponentFixture<AgendaScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
