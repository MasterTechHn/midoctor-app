import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
} from 'date-fns';
import { Observable } from 'rxjs';
import { colors } from '../../demo-utils/colors';

import { AgendaService } from '../../services/agenda.service';

import { Agenda } from '../../models/agenda';

export interface Appoitnment {
  state: string,
  day: string,
  startTime: string,
  endTime: string,
  date: string,
  description: string,
  diagnostic?: string,
  userId?: string,
  agendaId?: string
}

export interface Film {
  id: number;
  title: string;
  release_date: string;
}

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';

  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agenda-schedule.component.html',
  styleUrls: ['./agenda-schedule.component.css']
})

export class AgendaScheduleComponent implements OnInit {
  
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  events$?: Observable<CalendarEvent<{ film: Film }>[]>;

  activeDayIsOpen: boolean = false;

  appointments: Appoitnment[] = [];
  agendaSource: Agenda[] = [];

  doctor = {
    id: "601b30cf9a2bfd7430f8a917"
  };

  constructor(
    private http: HttpClient,
    private agendaService: AgendaService,
  ) { }

  ngOnInit(): void {
    this.getAgendas();
    this.fetchEvents();
  }

  getAgendas(): void{
    this.agendaService.getAgendas(this.doctor)
      .subscribe(resp => {
        this.agendaSource = resp.data;
      }, err => 
        console.log(err)
      );
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay,
    }[this.view]

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay,
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'yyyy-MM-dd')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'yyyy-MM-dd')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

      // this.events$ = this.http
      // .get('https://api.themoviedb.org/3/discover/movie', { params })
      // .pipe(
         
      // );
  };

}
