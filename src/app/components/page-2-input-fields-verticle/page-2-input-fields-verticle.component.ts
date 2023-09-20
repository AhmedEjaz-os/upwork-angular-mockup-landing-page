import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-2-input-fields-verticle',
  templateUrl: './page-2-input-fields-verticle.component.html',
  styleUrls: ['./page-2-input-fields-verticle.component.scss']
})
export class Page2InputFieldsVerticleComponent implements OnInit {
  @Input() Label: any;
  @Input() align: any;
  @Input() marginBottom: any;

  constructor() { }

  ngOnInit() {
  }

}
