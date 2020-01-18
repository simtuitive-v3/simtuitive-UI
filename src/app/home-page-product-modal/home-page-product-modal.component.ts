import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../services/data.service';

declare let $: any

@Component({
  selector: 'app-home-page-product-modal',
  templateUrl: './home-page-product-modal.component.html',
  styleUrls: ['./home-page-product-modal.component.scss']
})

export class HomePageProductModalComponent implements OnInit {

  productData
  hideImgAndIcon: boolean

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.productData = { 'hideImgAndIcon': false }
    this._data.currentModalData.subscribe(data => this.productData = Object.assign({}, this.productData, data))
    // this.productData.hideImgAndIcon = true
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
  openAndCloseModalViewFn() {
    this.productData.hideImgAndIcon = false
    $('#main-page-prd-modal').modal('hide')
    $('#loginModal').modal('show')
  }

} // Main Closing Braces
