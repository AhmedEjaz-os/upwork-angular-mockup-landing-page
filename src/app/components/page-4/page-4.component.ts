import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-4',
  templateUrl: './page-4.component.html',
  styleUrls: ['./page-4.component.scss']
})
export class Page4Component implements OnInit {
  dropdownMenu1: any;
  verticalLabels: any;
  tableHeaders: any;
  constructor() { }

  ngOnInit() {
    this.dropdownMenu1=[
      {
        menuItemTitle: "Brian Harris"
      }
    ];
    this.verticalLabels = [
      {
        label: {
          title: "Starts",
        },
        required: true,
        placeholder: {
          text: ''
        },
        type: {
          inpType: 'text'
        },
      },
      {
        label: {
          title: "Expires",
        },
        required: true,
        placeholder: {
          text: ''
        },
        type: {
          inpType: 'text'
        },
      },
    ];
    this.tableHeaders = [
      {
        title: "License",
        entries: [
          {
            entry: "5552"
          },
          {
            entry: "5553"
          },
          {
            entry: "5554"
          },
          {
            entry: "5555"
          },
          {
            entry: "8570"
          },
        ],
      },
      {
        title: "Code",
        entries: [
          {
            entry: "Internal"
          },
          {
            entry: "Internal"
          },
          {
            entry: "Dev"
          },
          {
            entry: "QA"
          },
          {
            entry: "Production"
          },
        ],
      },
      {
        title: "Seats",
        entries: [
          {
            entry: "50"
          },
          {
            entry: "50"
          },
          {
            entry: "50"
          },
          {
            entry: "50"
          },
          {
            entry: "50"
          },
        ],
      },
      {
        title: "Concurrent",
        entries: [
          {
            entry: "Yes"
          },
          {
            entry: "Yes"
          },
          {
            entry: "Yes"
          },
          {
            entry: "Yes"
          },
          {
            entry: "No"
          },
        ],
      },
      {
        title: "Type",
        entries: [
          {
            entry: "Research"
          },
          {
            entry: "Innovator"
          },
          {
            entry: "Connect"
          },
          {
            entry: "Insight"
          },
          {
            entry: "Connect"
          },
        ],
      },
      {
        title: "SubType",
        entries: [
          {
            entry: ""
          },
          {
            entry: ""
          },
          {
            entry: ""
          },
          {
            entry: ""
          },
          {
            entry: ""
          },
        ],
      },
      {
        title: "Starts",
        entries: [
          {
            entry: "10/17/2013"
          },
          {
            entry: "10/17/2013"
          },
          {
            entry: "10/17/2013"
          },
          {
            entry: "10/17/2013"
          },
          {
            entry: "10/17/2013"
          },
        ],
      },
      {
        title: "Software Expires",
        entries: [
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
        ],
      },
      {
        title: "Maintenance Expires",
        entries: [
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
        ],
      },
      {
        title: "Content Expires",
        entries: [
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
          {
            entry: "Perpetual"
          },
        ],
      },
    ]
  }

}
