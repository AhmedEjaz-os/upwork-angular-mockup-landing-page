import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
export interface DialogData {
  title: '',
  html: ''
}
@Component({
  selector: 'app-angular-material-dialog',
  templateUrl: './angular-material-dialog.component.html',
  styleUrls: ['./angular-material-dialog.component.scss']
})
export class AngularMaterialDialogComponent implements OnInit {
  constructor(
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {}
}
