import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  name: string;
  lastname: string;
  email: string;
  success: boolean;
}

@Component({
  selector: 'app-modal-request',
  templateUrl: './modal-request.component.html',
  styleUrls: ['./modal-request.component.css']
})
export class ModalRequestComponent implements OnInit {

  record: DialogData = {
    name: '',
    lastname: '',
    email: '',
    success: false
  };

  constructor(
    public dialogRef: MatDialogRef<ModalRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { 
    this.record.name = data.name;
    this.record.lastname = data.lastname;
    this.record.email = data.email;
    this.record.success = data.success
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
