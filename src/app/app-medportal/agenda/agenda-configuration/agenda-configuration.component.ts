import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { AgendaExceptionModalComponent } from './agenda-exception-modal/agenda-exception-modal.component';
import { Exception } from '../../models/exception';
import { Agenda } from '../../models/agenda';
import { AgendaService } from '../../services/agenda.service';

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

  doctor = {
    id: "601b30cf9a2bfd7430f8a917"
  };

  newException: Exception = {
    alias: '',
    date: '',
    month: '',
    year: '',
    status: true,
    tipo: ''
  }

  interval: Interval[] = [
    { label: '30 minutos', value: 0.5 },
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

  constructor(
    private agendaService: AgendaService,
    private fb: FormBuilder, 
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.initExceptions();
    this.init24Hours();
    this.getAgendas();

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

  initExceptions(): void{
    let exp: Exception = {
      alias: 'dia del trabajador',
      date: '1',
      month: '5',
      year: this.dat.getFullYear().toString(),
      status: true,
      tipo: ''
    }
    this.exceptionSource.push(exp);
  }

  getAgendas(): void{
    this.agendaService.getAgendas(this.doctor)
      .subscribe(res => {
        console.warn(res);
        this.agendaSource = res.data;
      }, err => {
        console.warn(err)
    });
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
      doctor: this.doctor.id,
      intervalTime: 0.5,
      m: monday,
      t: tuesday,
      w: wednesday,
      r: thursday,
      f: friday,
      s: saturday,
      u: sunday,
      consultingRoomValidate: false,
      consultingRoom: {
        name: this.agendaForm.value.address.name,
        address: this.agendaForm.value.address.street,
        phone: this.agendaForm.value.address.phone
      },
      exceptions: this.exceptionSource
    }

    this.agendaService.newAgenda(agenda)
      .subscribe(res => {
        agenda._id = res.data[0]._id;
        this.agendaSource.push(agenda);
        this.dataSource = [];
        this.exceptionSource = [];
        this.agendaForm.reset();
        this.init24Hours();
        this.initExceptions();
      }, err => {
        console.warn(err);
    });
      
    // AGENDAS_DATA.push(agenda);
  }

  removeAgenda(event: any, agenda: Agenda): void {
    let ix = this.agendaSource.indexOf(agenda);
    console.warn(agenda);
    if(ix > -1){
      this.agendaService.deleteAgenda(agenda)
        .subscribe(res => {
          console.warn(res);
          this.agendaSource.splice(ix, 1);
        }, err => {
          console.log(err);
        });
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.agendaForm.controls[controlName].hasError(errorName);
  }

  openExceptionModal(): void {
    const dialogRef = this.dialog.open(AgendaExceptionModalComponent, {
      width: '300px',
      data: { 
        alias: this.newException.alias, 
        date: this.newException.date, 
        month: this.newException.month,
        year: this.newException.year,
        status: this.newException.status,
        tipo: this.newException.tipo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.alias != "" 
          && result.date != "" 
            && result.month != ""
              && result.year != "")
        this.exceptionSource.push(result)
    });
  }

  editException(event: any, exp: Exception): void {
    let indx = this.exceptionSource.indexOf(exp);
    const dialogRef = this.dialog.open(AgendaExceptionModalComponent, {
      width: '300px',
      data: { 
        alias: exp.alias, 
        date: exp.date, 
        month: exp.month,
        year: exp.year,
        status: exp.status,
        tipo: exp.tipo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.alias != "" 
          && result.date != "" 
            && result.month != ""
              && result.year != "")
        this.exceptionSource[indx] = result;
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
