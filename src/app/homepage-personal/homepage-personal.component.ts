import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-personal',
  templateUrl: './homepage-personal.component.html',
  styleUrls: ['./homepage-personal.component.scss']
})
export class HomepagePersonalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
