import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.labels = [
      {
        title: "Account Name"
      },
      {
        title: "Account Number"
      },
      {
        title: "Contact Name"
      },
      {
        title: "Email"
      },
      {
        title: "Phone"
      }
    ]
    this.verticalLabels = [
      {
        title: "Starts",
        align: "center",
        marginBottom: "1.4rem"
      },
      {
        title: "Expires",
        align: "center",
        marginBottom: "1.4rem"
      },
      {
        title: "Max number of automatic registration changes",
        align: "start",
        marginBottom: "4.4rem"
      },
      {
        title: "Delay for automatic registration changes in hours",
        align: "start",
        marginBottom: "4.4rem"
      }
    ]
  }

}
