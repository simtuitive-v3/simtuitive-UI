import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-footer',
  templateUrl: './logged-in-footer.component.html',
  styleUrls: ['./logged-in-footer.component.scss']
})
export class LoggedInFooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigateByUrl('/user/myDashboard')
  }

  goToAllProducts(){
    this.router.navigateByUrl('/user/allProducts')
  }

  goToAllCategories(){
    this.router.navigateByUrl('/user/allCategories')
  }

}
