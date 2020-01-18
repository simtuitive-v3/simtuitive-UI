import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService';
import { Router } from '@angular/router';
declare let $: any
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  userDetail
  firstName
  lastName
  email
  address
  password
  currentPassword
  confirmPassword
  errorMsg
  errorMsgVisible
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUserDetail()
  }
  getUserDetail() {
    this.userService.getUserDetail().subscribe((data: any) => {
      this.userDetail = data
      this.firstName = data.firstName
      this.lastName = data.lastName
      this.email = data.email
      this.address = data.billingAddress
    })
  }
  updateName() {
    var obj = {

      "firstName": this.firstName,
      "lastName": this.lastName

    }
    this.userService.updateName(obj).subscribe(data => {
      this.getUserDetail()
    })
  }
  updateEmail() {
    var obj = {
      "email": this.email
    }

    this.userService.updateEmail(obj).subscribe(data => {
      this.getUserDetail()
    })
  }
  updateAddress() {
    var obj = {
      "address": this.address,
      "type": "BILLING_ADDRESS"

    }
    this.userService.updateAddress(obj).subscribe(data => {
      this.getUserDetail()
    })
  }
  updatePassword() {
    var obj = {
      "newPassword": this.password,
      "oldPassword": this.currentPassword
    }

    if (this.confirmPassword == this.password) {
      this.userService.updatePassword(obj).subscribe(data => {
        this.password = ''
        this.confirmPassword = ''
        this.currentPassword = ''
        this.errorMsgVisible = true
        this.getUserDetail()

        // localStorage.clear();
        // this.router.navigateByUrl('/home');
        this.errorMsg = undefined
        $('#passwordSection').collapse('toggle')
        $('#passwordAcceptedModal').modal('show')
      },
        error => {
          this.errorMsgVisible = true
          this.errorMsg = "The current password you have entered is incorrect!"

          // $('#passwordRejectModal').modal('show')
        })
    }
    else {
      this.errorMsgVisible = true
      this.errorMsg = "password is not matching"

    }
  }
}
