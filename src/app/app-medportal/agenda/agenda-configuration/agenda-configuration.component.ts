import { Component, OnInit } from '@angular/core';


export interface AvailableDay {
  day: String,
  label: String,
  value: Boolean,
  shift: [Number]
};

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

const WORKSDAY_DATA: AvailableDay[] = [
  { day: 'm', label: 'Lunes', value: false , shift: [1] },
  { day: 't', label: 'Martes', value: false, shift: [1] },
  { day: 'w', label: 'Miercoles', value: false, shift: [1] },
  { day: 'r', label: 'Jueves', value: false, shift: [1] },
  { day: 'f', label: 'Viernes', value: false, shift: [1] },
  { day: 's', label: 'Sabado', value: false, shift: [1] },
  { day: 'u', label: 'Domingo', value: false, shift: [1] }
];

@Component({
  selector: 'app-agenda-configuration',
  templateUrl: './agenda-configuration.component.html',
  styleUrls: ['./agenda-configuration.component.css']
})
export class AgendaConfigurationComponent implements OnInit {

  displayedColumns = ['Dia', 
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
  dataSource: AvailableDay[] = [];

  places = [
    { name: 'Hospital Mario Catarino Rivas', address: 'bolevard plaza pedregal.', phone: 25505005 },
    { name: 'Istituto Hondureño de Seguridad Social', address: 'bolevard del norte.', phone: 25543987 }
  ];

  constructor() { }

  ngOnInit(): void {
    WORKSDAY_DATA.forEach(availableDay => {
      for (let i = 2; i <= 24; i++) {
        availableDay.shift.push(i);
      }
    });

    this.dataSource = WORKSDAY_DATA;
  }

  addHouronClick(): void{
    
  }

}
