import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { ProductService } from '../service/product.service';
import { UserService } from '../service/UserService';
declare let $;
@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss']
})

export class LoggedInHeaderComponent implements OnInit {

  userDropdown: boolean
  wishlistDropdownOpen: boolean
  notiOpen: boolean
  loggedInUserDetails
  userDetail
  wishList
  textSearch
  isMobileLayoutMenu: boolean


  constructor(private eRef: ElementRef, private router: Router, private _data: DataService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserDetail().subscribe((data: any) => {
      // this.router.navigate(['/user/allProducts']) 
    },
      error => {
        this.router.navigate(['/home'])
      })
    this.userDropdown = false
    this.wishlistDropdownOpen = false
    this.notiOpen = false
    this.getUserDetail()
    this.getWishList()
    var self = this
    $('input').keydown(function (event) {
      // var self=this
      if (event.which === 13 && event.target.name == 'textSearch') {
        // Do something
        // Disable sending the related form
        // event.preventDefault();
        self.SearchSimulations(event.target.value)
      }
    });

    // this._data.currentLoggedInUserDetails.subscribe(details => this.loggedInUserDetails = details)

    // console.log(this.loggedInUserDetails)
  }

  toggleUserDropdown() {
    this.userDropdown = !this.userDropdown
  }
  SearchSimulations(textSearch) {
    this.router.navigate(['/user/search'], { queryParams: { textSearch } })
  }
  toggleWishlistDropdown() {
    this.wishlistDropdownOpen = !this.wishlistDropdownOpen
  }
  goToWishList() {
    this.wishlistDropdownOpen = false
    this.router.navigateByUrl('/user/myDashboard')
  }

  toggleNotification() {
    this.router.navigateByUrl('/user/notification')
    // this.notiOpen = !this.notiOpen
  }
  search(event) {
    if (event.keyCode == 13) {
      this.SearchSimulations(this.textSearch)
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {

    if (event.target.id == 'userIcon' || event.target.id == 'wishlistIcon' || event.target.id == 'notiIcon') { }
    else if (this.eRef.nativeElement.contains(event.target)) { }
    else {
      this.userDropdown = false
      this.wishlistDropdownOpen = false
      this.notiOpen = false
      // this.clickEvent.emit()
    }
  }

  goToDashboard() {
    this.router.navigateByUrl('/user/myDashboard')
  }
  getWishList() {
    this.userService.getWishList().subscribe(data => {
      this.wishList = data
    })

  }

  hamburgerToggleFn() {
    this.isMobileLayoutMenu = !this.isMobileLayoutMenu
  }

  goToSettings() {
    this.router.navigateByUrl('/user/accountSettings')
  }
  getUserDetail() {
    this.userService.getUserDetail().subscribe(data => {
      this.userDetail = data
      // console.log(data, "data")
    })
  }
  logoutUser() {
    if (localStorage.getItem('googleUser') !== null) {
      this.authService.signOut().then(data => {
        localStorage.clear();
        this.router.navigateByUrl('/home');
      }).catch(err => {
        localStorage.clear();
        this.router.navigateByUrl('/home');
      });
    } else {
      localStorage.clear();
      this.router.navigateByUrl('/home')
    }
  }


  navigation(category) {
    this.router.navigate(['/user/CategoriesWise'], { queryParams: { category } });
    this.hamburgerToggleFn()
  }

}// Main Closing Braces
