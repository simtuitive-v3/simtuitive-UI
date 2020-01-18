import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-business',
  templateUrl: './homepage-business.component.html',
  styleUrls: ['./homepage-business.component.scss']
})
export class HomepageBusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
