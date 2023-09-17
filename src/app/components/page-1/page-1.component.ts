import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.scss']
})
export class Page1Component implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(async param => {
      let routeParams = this.route.snapshot.params;
      console.log(param, '\n', routeParams);
    })
  }

}
