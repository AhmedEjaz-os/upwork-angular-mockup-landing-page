import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularMaterialDialogComponent } from '../angular-material-dialog/angular-material-dialog.component';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component implements OnInit {
  companyName: string = "Company_Name";
  labels: any;
  verticalLabels: any;
  goldFireLabel: string = "Goldfire Serial Number";

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.labels = [
      {
        label: {
          title: "Account Name",
        },
        required: true,
        placeholder: {
          text: ''
        },
      },
      {
        label: {
          title: "Account Number",
        },
        required: true,
        placeholder: {
          text: ''
        }
      },
      {
        label: {
          title: "Contact Name",
        },
        required: true,
        placeholder: {
          text: ''
        }
      },
      {
        label: {
          title: "Email",
        },
        required: true,
        placeholder: {
          text: ''
        }
      },
      {
        label: {
          title: "Phone",
        },
        required: true,
        placeholder: {
          text: ''
        }
      }
    ]
    this.verticalLabels = [
      {
        label: {
          title: "Starts",
        },
        required: true,
        placeholder: {
          text: ''
        }
      },
      {
        label: {
          title: "Expires",
        },
        required: true,
        placeholder: {
          text: ''
        }
      },
      {
        label: {
          title: "Max number of automatic registration changes",
        },
        required: false,
        placeholder: {
          text: ''
        }
      },
      {
        label: {
          title: "Delay for automatic registration changes in hours",
        },
        required: false,
        placeholder: {
          text: ''
        }
      }
    ]
  }

  openDialog() {
    this.dialog.open(AngularMaterialDialogComponent, {
      data: {
        title: 'Additional Contact',
        html: "additionalContactDialog"
      }
    });
  }


}
