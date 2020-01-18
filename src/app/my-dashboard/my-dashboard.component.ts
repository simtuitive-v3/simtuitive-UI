import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit {
  userdetail
  constructor(private userService: UserService) {


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

}
