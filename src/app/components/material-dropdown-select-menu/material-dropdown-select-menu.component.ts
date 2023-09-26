import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-dropdown-select-menu',
  templateUrl: './material-dropdown-select-menu.component.html',
  styleUrls: ['./material-dropdown-select-menu.component.scss']
})
export class MaterialDropdownSelectMenuComponent implements OnInit {
  @Input() menuItem: any;
  @Input() label: any;

  constructor() { }

  ngOnInit() {
  }

}
