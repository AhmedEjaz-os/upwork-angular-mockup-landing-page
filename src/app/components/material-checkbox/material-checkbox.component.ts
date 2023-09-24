import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  color: ThemePalette;
}

@Component({
  selector: 'app-material-checkbox',
  templateUrl: './material-checkbox.component.html',
  styleUrls: ['./material-checkbox.component.scss']
})

export class MaterialCheckboxComponent implements OnInit {
  @Input() label: any;
  task: Task = {
    color: 'primary',
  };
  allComplete: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
