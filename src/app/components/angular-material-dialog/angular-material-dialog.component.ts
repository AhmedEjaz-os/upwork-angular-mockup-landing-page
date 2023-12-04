import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
interface DialogData {
  title: '',
  html: ''
}
@Component({
  selector: 'app-angular-material-dialog',
  templateUrl: './angular-material-dialog.component.html',
  styleUrls: ['./angular-material-dialog.component.scss']
})
export class AngularMaterialDialogComponent implements OnInit {
  ManageKnowledgeBases1: any;
  ManageKnowledgeBases2: any;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.ManageKnowledgeBases1 = [
      {
        title: 'British Patent Office'
      },
      {
        title: 'Chinese Patent Office'
      },
      {
        title: 'French Patent Office'
      },
      {
        title: 'German Patent Office'
      },
      {
        title: 'Japanese Patent Office'
      },
      {
        title: 'US Patent Office'
      },
    ]
    this.ManageKnowledgeBases2 = [
      {
        title: 'Access Engineering'
      },
      {
        title: 'AccessScience'
      },
      {
        title: 'AIAA Articles'
      },
      {
        title: 'AMACOM eBooks'
      },
      {
        title: 'American Nuclear Society Articles'
      },
      {
        title: 'American Society of Mechanical Engineers Articles'
      },
      {
        title: 'Access Engineering'
      },
      {
        title: 'AccessScience'
      },
      {
        title: 'AIAA Articles'
      },
      {
        title: 'AMACOM eBooks'
      },
      {
        title: 'American Nuclear Society Articles'
      },
      {
        title: 'American Society of Mechanical Engineers Articles'
      },
    ]
  }
}
