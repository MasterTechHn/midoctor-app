import { Component, OnInit } from '@angular/core';

import { Doctor } from '../models/doctor';

@Component({
  selector: 'med-portal-perfil',
  templateUrl: './med-portal-perfil.component.html',
  styleUrls: ['./med-portal-perfil.component.css']
})
export class MedPortalPerfilComponent implements OnInit {
  doctor: Doctor = {
    name: 'Hector Manuel',
    lastname: 'Lainez Chavarria',
    email: 'hmLainez@gmail.com',
    password: '$2b$05$P63U07/pIdCzVRVlU0605O5IzYqD39feFYjObOjDRdJ3OFDuuZITi',
    phone: 50425508765,
    sex: true,
    address: {
      country: 'Honduras',
      city: 'Puerto Cortes',
      street: 'Frente a playa coca-cola.'
    },
    speciality: 'medico cirujano',
    experience: 'Director colegio Medico Puerto Cortes.'
  }

  showEditInfo = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleEditContainer(): void{
    this.showEditInfo = !this.showEditInfo;
  }

}