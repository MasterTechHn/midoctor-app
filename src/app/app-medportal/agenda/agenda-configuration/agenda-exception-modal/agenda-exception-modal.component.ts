import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exception } from '../../../models/exception';

@Component({
  selector: 'app-agenda-exception-modal',
  templateUrl: './agenda-exception-modal.component.html',
  styleUrls: ['./agenda-exception-modal.component.css']
})

export class AgendaExceptionModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AgendaExceptionModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Exception
  ) { }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
  }

}
