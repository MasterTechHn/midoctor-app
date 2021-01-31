import { Component, OnInit } from '@angular/core';

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
  consultingRoomValidate: Boolean,
  doctor: String,
  intervalTime: Number,
  m: [Number],
  t: [Number],
  w: [Number],
  r: [Number],
  f: [Number],
  s: [Number],
  u: [Number],
  place: {
    name: String,
    address: String
  }
}

const HOUR_DATA: Hour[] = [];

@Component({
  selector: 'app-agenda-configuration',
  templateUrl: './agenda-configuration.component.html',
  styleUrls: ['./agenda-configuration.component.css']
})
export class AgendaConfigurationComponent implements OnInit {

  displayedColumns = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  dataSource: Hour[] = [];

  interval = [
    { label: '30 minutos', value: 1.5 },
    { label: '1 hora', value: 1 },
    { label: '1:30', value: 1.5 },
  ];

  constructor() { }

  ngOnInit(): void {

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

      HOUR_DATA.push(hour);
    }

    this.dataSource = HOUR_DATA;
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
