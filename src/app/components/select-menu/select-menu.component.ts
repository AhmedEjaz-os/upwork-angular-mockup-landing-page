import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent implements OnInit {
  @Input() menuHeading: string;
  @Input() button: any;
  constructor() {}
  ngOnInit() {}

}
