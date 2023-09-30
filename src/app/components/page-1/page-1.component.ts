import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-1",
  templateUrl: "./page-1.component.html",
  styleUrls: ["./page-1.component.scss"],
})
export class Page1Component implements OnInit {
  selectMenuHeadingOne: string;
  selectMenuHeadingOneArray: any;
  selectMenuHeadingTwo: string;
  selectMenuHeadingTwoArray: any;
  constructor(
  ) {}
  
  ngOnInit() {
    setTimeout(() => {
      document.getElementById('warning-badge-bar').style.top = '-64px'
    }, 10000);
    this.selectMenuHeadingOne = "Company";
    this.selectMenuHeadingOneArray = [
      {
        buttonTitle: "Muhammad Ahmed Ejaz",
      },
      {
        buttonTitle: "Mohsin Sabir",
      },
      {
        buttonTitle: "Muhammad Zain Ejaz",
      },
      {
        buttonTitle: "Muhammad Ahmed Ejaz",
      },
      {
        buttonTitle: "Mohsin Sabir",
      },
      {
        buttonTitle: "Muhammad Zain Ejaz",
      },
    ];
    this.selectMenuHeadingTwo = "Account Number";
    this.selectMenuHeadingTwoArray = [
      {
        buttonTitle: "Muhammad Ahmed Ejaz",
      },
      {
        buttonTitle: "Mohsin Sabir",
      },
      {
        buttonTitle: "Muhammad Zain Ejaz",
      },
    ];
  }
}
