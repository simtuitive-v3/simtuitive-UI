import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
declare let $: any
@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  password: string;
  confirmPassword: string;
  token: string;
  errorMsg: string;
  errorMsgVisible: boolean;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  updatePassword() {
    const obj = {
      token: this.token,
      password: this.password
    };

    if (this.confirmPassword === this.password) {
      this.loginService.forgotPassword(obj).subscribe(data => {
        this.password = '';
        this.confirmPassword = '';
        this.errorMsgVisible = false;
        this.errorMsg = '';
        $('#reset-success-modal').modal('show')
        // this.router.navigate(['/home']);
      }, err => {
        this.errorMsgVisible = true;
        // $('#reset-success-modal').modal('show')
        this.errorMsg = 'Something went wrong during password reset';
      });
    } else {
      this.errorMsgVisible = true;
      this.errorMsg = 'Password is not matching';
    }
  }
  goToLogin() {
    // $('#signupModal').modal('hide')
    $('#reset-success-modal').modal('hide')
    this.router.navigate(['/home/']);
  }
}
