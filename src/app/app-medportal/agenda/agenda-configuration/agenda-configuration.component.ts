import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AgendaExceptionModalComponent } from './agenda-exception-modal/agenda-exception-modal.component';

export interface Exception {
  alias: string,
  date: string,
  month: string,
  year: string,
  status: boolean,
  tipo: string
}

export interface Hour {
  id: number,
  label: string
  m?: boolean,
  t?: boolean,
  w?: boolean,
  r?: boolean,
  f?: boolean,
  s?: boolean,
  u?: boolean
}

export interface Agenda {
  alias: string,
  price: number,
  doctor: string,
  intervalTime: number,
  m: number[],
  t: number[],
  w: number[],
  r: number[],
  f: number[],
  s: number[],
  u: number[],
  place: {
    name: string,
    address: string,
    phone?: number
  }
}

export interface Interval {
  label: string,
  value: number
}

const AGENDAS_DATA: Agenda[] = [];
const EXCEPTION_DATA: Exception[] = [];

@Component({
  selector: 'app-agenda-configuration',
  templateUrl: './agenda-configuration.component.html',
  styleUrls: ['./agenda-configuration.component.css']
})
export class AgendaConfigurationComponent implements OnInit {

  dat: Date = new Date();
  dataSource: Hour[] = [];
  agendaSource: Agenda[] = [];
  exceptionSource: Exception[] = [];

  interval: Interval[] = [
    { label: '30 minutos', value: 1.5 },
    { label: '1 hora', value: 1 },
    { label: '1:30', value: 1.5 },
  ];

  agendaForm = this.fb.group({
    alias: ['', Validators.required],
    price: ['', [Validators.required, Validators.minLength(2)]],
    address: this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      phone: ['', [Validators.minLength(8)]]
    }),
    intervalSelected: ['']
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.initExceotions();
    this.init24Hours();

  }
  
  init24Hours(): void {
    let lb = '';
    let flb = '';
    let count = 1;
    for (let i = 1; i <= 24; i+= 0.5) {
      if(i > count){
        if(i >= 10){
          flb = i.toString().substring(0, 2);
        }else {
          flb = i.toString().substring(0, 1);
        }
        lb = `${flb}:30`;
        count ++
      }else {
        lb = `${i}:00`;
      }

      let hour: Hour = {
        id: i,
        label: lb,
        m: false,
        t: false,
        w: false,
        r: false,
        f: false,
        s: false,
        u: false
      };

      // HOUR_DATA.push(hour);
      this.dataSource.push(hour);
    }

    // this.dataSource = HOUR_DATA;
  }

  initExceotions(): void{
    let exp: Exception = {
      alias: 'feriado morazanico',
      date: '15',
      month: '8',
      year: this.dat.getFullYear.toString(),
      status: true,
      tipo: ''
    }

    EXCEPTION_DATA.push(exp);
    EXCEPTION_DATA.push(exp);
    EXCEPTION_DATA.push(exp);

    this.exceptionSource = EXCEPTION_DATA;
  }

  addAgenda(): void{
    let monday: number[] = [];
    let tuesday: number[] = [];
    let wednesday: number[] = [];
    let thursday: number[] = [];
    let friday: number[] = [];
    let saturday: number[] = [];
    let sunday: number[] = [];

    this.dataSource.forEach(hour => {
      if(hour.m) monday.push(hour.id);

      if(hour.t) tuesday.push(hour.id);

      if(hour.w) wednesday.push(hour.id);

      if(hour.r) thursday.push(hour.id);

      if(hour.f) friday.push(hour.id);

      if(hour.s) saturday.push(hour.id);

      if(hour.w) sunday.push(hour.id);
    });

    const agenda: Agenda = {
      alias: this.agendaForm.value.alias,
      price: this.agendaForm.value.price,
      doctor: '',
      intervalTime: this.agendaForm.value.intervalSelected,
      m: monday,
      t: tuesday,
      w: wednesday,
      r: thursday,
      f: friday,
      s: saturday,
      u: sunday,
      place: {
        name: this.agendaForm.value.address.name,
        address: this.agendaForm.value.address.street,
        phone: this.agendaForm.value.address.phone
      }
    }

    AGENDAS_DATA.push(agenda);

    this.agendaSource = AGENDAS_DATA;

    window.alert(`new agenda \n ${agenda}`);
    this.dataSource = [];
    this.init24Hours();
    this.agendaForm.reset();
  }

  removeAgenda(event: any, agenda: Agenda): void {
    let ix = this.agendaSource.indexOf(agenda);
    if(ix > -1) this.agendaSource.splice(ix, 1);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.agendaForm.controls[controlName].hasError(errorName);
  }

  openExceptionModal(): void {
    const dialogRef = this.dialog.open(AgendaExceptionModalComponent, {
      width: '350px',
      data: {}
    });
  }

  selectedMhour(event: any, hour: Hour): void{
    hour.m = !hour.m;
  }

  selectedThour(event: any, hour: Hour): void{
    hour.t = !hour.t;
  }

  selectedWhour(event: any, hour: Hour): void{
    hour.w = !hour.w;
  }

  selectedRhour(event: any, hour: Hour): void{
    hour.r = !hour.r;
  }

  selectedFhour(event: any, hour: Hour): void{
    hour.f = !hour.f;
  }
  
  selectedShour(event: any, hour: Hour): void{
    hour.s = !hour.s;
  }

  selectedUhour(event: any, hour: Hour): void{
    hour.u = !hour.u;
  }
}
