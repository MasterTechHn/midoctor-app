import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.component.html',
  styleUrls: ['./postulant.component.css']
})
export class PostulantComponent implements OnInit {

  postulantForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    speciality: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
