import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-2-input-fields',
  templateUrl: './page-2-input-fields.component.html',
  styleUrls: ['./page-2-input-fields.component.scss']
})
export class Page2InputFieldsComponent implements OnInit {
  @Input() Label: any;
  constructor() { }

  ngOnInit() {}

}
