import { Component, OnInit } from '@angular/core';

export interface Hour {
  id: number,
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

  places = [
    { name: 'Hospital Mario Catarino Rivas', address: 'bolevard plaza pedregal.', phone: 25505005 },
    { name: 'Istituto Hondureño de Seguridad Social', address: 'bolevard del norte.', phone: 25543987 }
  ];

  constructor() { }

  ngOnInit(): void {

    this.initHours();
  }
  
  initHours(): void {
    for (let i = 1; i <= 24; i++) {
      let hour: Hour = {
        id: i,
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
    window.alert(`${hour.id} ${hour.m}`);
  }

}
