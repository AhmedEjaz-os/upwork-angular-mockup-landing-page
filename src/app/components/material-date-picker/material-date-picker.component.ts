import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-date-picker',
  templateUrl: './material-date-picker.component.html',
  styleUrls: ['./material-date-picker.component.scss']
})
export class MaterialDatePickerComponent implements OnInit {
  @Input() label: any;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
