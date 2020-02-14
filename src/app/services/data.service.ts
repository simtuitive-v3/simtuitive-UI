import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { ProductService } from '../service/product.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private loggedInUserDetails = new BehaviorSubject<string>('')
  currentLoggedInUserDetails = this.loggedInUserDetails.asObservable()

  private modalData = new BehaviorSubject<string>('')
  currentModalData = this.modalData.asObservable()

  // private getProdDetails = new BehaviorSubject<string>('')
  // prodDetails = this.getProdDetails.asObservable()

  // private isCardDetail = new BehaviorSubject<string>('')
  // currentIsCardDetail = this.isCardDetail.asObservable()

  constructor(private _product: ProductService) { }

  postLoggedInUserDetailsFn(details) {
    this.loggedInUserDetails.next(details)
  }

  postCurrentModalDataFn(data) {
    if (data)
      data['hideImgAndIcon'] = false
    this.modalData.next(data)
  }

  // getProdDetailsFn(id) {
  //   this._product.getProductDetails(id).subscribe((pd: any) => this.getProdDetails.next(JSON.parse(pd._body)))
  // }

  // isCardDetailFn(bool) {
  //   this.isCardDetail.next(bool)
  // }

} // Main Closing Braces
