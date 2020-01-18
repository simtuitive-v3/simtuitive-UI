import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-institution',
  templateUrl: './homepage-institution.component.html',
  styleUrls: ['./homepage-institution.component.scss']
})
export class HomepageInstitutionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
