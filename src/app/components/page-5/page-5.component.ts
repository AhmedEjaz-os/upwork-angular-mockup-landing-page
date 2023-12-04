import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-5',
  templateUrl: './page-5.component.html',
  styleUrls: ['./page-5.component.scss']
})
export class Page5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('warning-badge-bar').style.top = '-64px'
    }, 10000);
  }

}
