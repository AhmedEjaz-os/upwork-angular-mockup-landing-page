import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AngularMaterialDialogComponent } from '../angular-material-dialog/angular-material-dialog.component';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.component.html',
  styleUrls: ['./page-3.component.scss']
})
export class Page3Component implements OnInit {
  dropdownMenu1: any;
  dropdownMenu2: any;
  dropdownMenu3: any;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dropdownMenu1 = [
      {
        menuItemTitle: 'Research'
      },
      {
        menuItemTitle: 'Connect'
      },
      {
        menuItemTitle: 'Insight'
      },
      {
        menuItemTitle: 'Innovator'
      },
      {
        menuItemTitle: 'Researcher'
      },
      {
        menuItemTitle: 'Researcher (L)'
      },
    ]
    this.dropdownMenu2 = [
      {
        menuItemTitle: 'API Only'
      },
    ]
    this.dropdownMenu3 = [
      {
        menuItemTitle: 'Production'
      },
    ]
  }

  openDialog() {
    this.dialog.open(AngularMaterialDialogComponent, {
      data: {
        title: 'Manage Knowledge Bases',
        html: "ManageKnowledgeBases"
      }
    });
  }

}
