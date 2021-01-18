import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-request',
  templateUrl: './modal-request.component.html',
  styleUrls: ['./modal-request.component.css']
})
export class ModalRequestComponent implements OnInit {
  
  response = {
    name: '',
    lastname: '',
    email: ''
  };

  error = false;

  constructor(
    public dialogRef: MatDialogRef<ModalRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      if(data == undefined){
        this.error = true;
      }else{
        this.response.name = data.name;
        this.response.lastname = data.lastname;
        this.response.email = data.email;    
      }
    }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
