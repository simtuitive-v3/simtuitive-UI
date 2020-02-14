import { DataService } from '../services/data.service';
import { UserService } from '../service/UserService';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../config';

declare let $: any

@Component({
  selector: 'app-logged-in-product-modal',
  templateUrl: './logged-in-product-modal.component.html',
  styleUrls: ['./logged-in-product-modal.component.scss']
})

export class LoggedInProductModalComponent implements OnInit {

  productData
  delimiter = new Config().delimiter

  constructor(private _data: DataService, private _user: UserService, private _router: Router) { }

  ngOnInit() {
    this.productData = { 'hideImgAndIcon': false }
    this._data.currentModalData.subscribe(data => this.productData = Object.assign({}, this.productData, data))
    // this.productData.hideImgAndIcon = false
  }
  playOrCloseVideoFn() {
    this.productData.hideImgAndIcon = !this.productData.hideImgAndIcon
  }
  @HostListener('document:click', ['$event'])
  clickOutSideTheVideoBlock(e) {
    if (e.target.id) this.pauseVideoFn()
  }
  closeModal() {
    this.productData.hideImgAndIcon = false
  }
  pauseVideoFn() {
    this.productData.hideImgAndIcon = false
    // this.videoPlayer.nativeElement.pause();
  }
  loggedInOpenWishListModalFn() {
    this.productData.hideImgAndIcon = false
    this._user.addToWishlist(this.productData.id).subscribe(data => {
      $('#logged-in-wishList-modal').modal('show')
    },
      error => {
        $('#logged-in-wishList-reject-modal').modal('show')
      })

  }
  closeWishlistModal() {
    $('#logged-in-wishList-modal').modal('hide')
    $('#logged-in-wishList-reject-modal').modal('hide')
  }

  navigateToFn(product) {
    window.scroll(0, 0)
    let qp = product.productTitle.split(' ').join('-')
    this._router.navigate([`/user/product/${qp}${this.delimiter}${product.courseLevel}`])
  }
} // Main Closing Braces
