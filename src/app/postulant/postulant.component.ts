import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostulantService } from '../services/postulant.service';
import { Postulant } from '../interfaces/postulant';

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

  constructor(
    private postulantService: PostulantService
  ) { }

  ngOnInit(): void {
  }

  onApply() {
    console.warn(this.postulantForm.value);
    debugger;
    console.warn(this.postulantForm.value.name);
    const postulant:Postulant = {
      name: this.postulantForm.value.name,
      lastname: this.postulantForm.value.lastname,
      speciality: this.postulantForm.value.speciality,
      email: this.postulantForm.value.email,
      phone: this.postulantForm.value.phone,
      address: {
        country: this.postulantForm.value.address.country,
        city: this.postulantForm.value.address.city,
        street: this.postulantForm.value.address.street
      }
    }

    this.postulantService.applyPostulant(postulant)
      .subscribe((res) => {
        debugger;
        console.warn(res);
      });
  }
}
