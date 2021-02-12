import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import { AppointmentService } from '../../services/appointment.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  green: {
    primary: '#4ad22b',
    secondary: '#31b214',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

import { Agenda } from '../../models/agenda';
import { Appoitnment } from '../../models/appoitnment';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agenda-schedule.component.html',
  styleUrls: ['./agenda-schedule.component.css']
})
export class AgendaScheduleComponent implements OnInit{
  @ViewChild('modalContent', { static: true }) modalContent?: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData?: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();
  fechaStart =  new Date("2021-02-12T09:30:00.000Z");
  fechaEnd = new Date("2021-02-12T10:30:00.000Z");


  events: CalendarEvent[] = [];
  
  activeDayIsOpen: boolean = true;
  appointmentSource: Appoitnment[] = [];

  doctor = {
    id: "601b30cf9a2bfd7430f8a917"
  };

  constructor(
    private modal: NgbModal,
    private appointmentService: AppointmentService) 
    {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.appointmentService.getAppointments(this.doctor)
      .subscribe(resp => {
        const aps = resp.data.map((appointment: Appoitnment) => {
          return {
            state: appointment.state,
              day: appointment.day,
              startTime: appointment.startTime,
              endTime: appointment.endTime,
              date: appointment.date,
              description: appointment.description,
              diagnostic: appointment.diagnostic,
              user: appointment.user,
              agenda: appointment.agenda,
              doctor: appointment.doctor
          }
        });
        console.warn(aps);
        this.appointmentSource = aps;
        this.fetchEvents();
      }, err => {
        console.log(err)
      }
    );
  }

  fetchEvents(): void{
    this.appointmentSource.forEach(aps => {
      let date = aps.date.substring(0,2);
      console.log(date);
      let month = aps.date.substr(3,2);
      console.log(month);
      let year = aps.date.substring(6,10);
      console.log(year);
      let badge = colors.green;
      let start = `${year}-${month}-${date}T${aps.startTime}:00.000Z`;
      console.log(start);
      let end = `${year}-${month}-${date}T${aps.endTime}:00.000Z`;

      if(aps.state == 'open') badge = colors.green;
      if(aps.state == 'confirm') badge = colors.yellow;
      if(aps.state == 'closed') badge = colors.red;

      this.events = [
        ...this.events,
        {
          title: aps.description,
          start: addHours(new Date(start), 6),
          end: addHours(new Date(end), 6),
          color: badge,
          actions: this.actions,
        },
      ];
    });
    console.warn(this.events);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        }, 
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
