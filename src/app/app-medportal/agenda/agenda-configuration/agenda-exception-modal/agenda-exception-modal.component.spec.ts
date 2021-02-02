import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaExceptionModalComponent } from './agenda-exception-modal.component';

describe('AgendaExceptionModalComponent', () => {
  let component: AgendaExceptionModalComponent;
  let fixture: ComponentFixture<AgendaExceptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaExceptionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaExceptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
