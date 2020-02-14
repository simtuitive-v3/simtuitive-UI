import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService';
import { Config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit {
  userdetail

  delimiter = new Config().delimiter

  constructor(private userService: UserService, private _router: Router) {


  }

  ngOnInit() {
    this.getWishList()
  }
  getWishList() {
    this.userService.getWishList().subscribe(data => {
      console.log(data)
      this.userdetail = data
    })
  }
  removeWishlist(id) {
    this.userService.removeWishlist(id).subscribe(data => {
      this.getWishList()
    })
  }

  navigateToFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this._router.navigate([`/user/product/${qp}${this.delimiter}${product.courseLevel}`])
  }

}
