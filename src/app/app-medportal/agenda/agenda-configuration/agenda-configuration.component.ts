import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-configuration',
  templateUrl: './agenda-configuration.component.html',
  styleUrls: ['./agenda-configuration.component.css']
})
export class AgendaConfigurationComponent implements OnInit {

  places = [
    {name: 'Hospital Mario Catarino Rivas', address: 'bolevard plaza pedregal.', phone: 25505005},
    {name: 'Istituto Hondureño de Seguridad Social', address: 'bolevard del norte.', phone: 25543987 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
