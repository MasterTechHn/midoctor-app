import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PostulantService } from '../services/postulant.service';
import { Postulant } from '../models/postulant';
import { ModalRequestComponent } from '../modal-request/modal-request.component'

@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.component.html',
  styleUrls: ['./postulant.component.css']
})
export class PostulantComponent implements OnInit {
  
  postulantForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    speciality: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    address: this.fb.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required]
    })
  });
  
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private postulantService: PostulantService
  ) { }

  ngOnInit(): void {

  }

  onApply(): void {
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
      .subscribe(res => {
        this.postulantForm.reset();
        this.openDialog(res.createdPostulant);
      }, error => {
        this.openDialog(null);
        console.warn(error);
      });
  }

  openDialog(data: any):void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    this.dialog.open(ModalRequestComponent, dialogConfig);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.postulantForm.controls[controlName].hasError(errorName);
  }
}
