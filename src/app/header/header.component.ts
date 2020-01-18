import { UserService } from '../service/UserService';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  textSearch
  isMobileLayoutMenu: boolean

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserDetail().subscribe((data: any) => {
      this.router.navigate(['/user/allProducts'])
    },
      error => {
        // this.router.navigate(['/home'])
      })
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
  }

  // @HostListener('document:click', ['$event'])
  // closeMobileLayoutMenu(e) {
  //   console.log(e.target.id)
  //   if (e.target.id != 'hamburger') this.hamburgerToggleFn()
  // }

  SearchSimulations(textSearch) {
    this.router.navigate(['/search'], { queryParams: { textSearch } })
  }

  hamburgerToggleFn() {
    this.isMobileLayoutMenu = !this.isMobileLayoutMenu
  }

  navigation(category) {
    if (category == "View all")
      this.router.navigateByUrl('/products/categories');
    else
      this.router.navigate(['/products/typeCategory'], { queryParams: { category } });
  }

}// Main Closing Braces
