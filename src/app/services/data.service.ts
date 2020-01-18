import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private loggedInUserDetails = new BehaviorSubject<string>('')
  currentLoggedInUserDetails = this.loggedInUserDetails.asObservable()

  private modalData = new BehaviorSubject<string>('')
  currentModalData = this.modalData.asObservable()

  // private isCardDetail = new BehaviorSubject<string>('')
  // currentIsCardDetail = this.isCardDetail.asObservable()

  constructor() { }

  postLoggedInUserDetailsFn(details) {
    this.loggedInUserDetails.next(details)
  }

  postCurrentModalDataFn(data) {
    if (data)
      data['hideImgAndIcon'] = false
    this.modalData.next(data)
  }

  // isCardDetailFn(bool) {
  //   this.isCardDetail.next(bool)
  // }

} // Main Closing Braces
