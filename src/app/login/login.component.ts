import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { LoginService } from '../service/login.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

declare let $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  changeModalViewFn(event) {
    // console.log(event.target.id)
    if (event.target.id == 'loginModal') {
      this.showLogin = true
      this.showForgotPwd = false
      this.showForgotPwdMsg = false
      this.errorMsgVisible = false
    }
  }

  userEmail: string
  password: string

  showForgotPwd: boolean
  showLogin: boolean
  showForgotPwdMsg: boolean
  errorMsg: string
  errorMsgVisible: boolean
  user: SocialUser
  loggedIn: boolean
  email: string

  resetEmail: string

  constructor(private loginService: LoginService, private router: Router, private _data: DataService, private authService: AuthService) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.showLogin = true
    this.showForgotPwd = false
    this.showForgotPwdMsg = false
    this.errorMsgVisible = false

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      // console.log(this.user);

      if (this.loggedIn) {
        const data = {
          googleIdToken: this.user.idToken
        }

        this.loginService.verifyGoogleToken(data).subscribe((res: any) => {
          const googleUser = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
            idToken: user.idToken
          };

          localStorage.setItem('googleUser', JSON.stringify(googleUser));
          const token = JSON.parse(res._body)
          window.localStorage.setItem('access_token', token.token)
          $('#loginModal').modal('hide')
          this.router.navigate(['/user/allProducts'])
        },
          err => {
            this.errorMsg = 'Google Authentication Failed'
            this.errorMsgVisible = true
          });
      }
    });
    var self = this
    $(document).keypress(function (e) {
      if ((e.target.id == "loginEmail" || e.target.id == "loginPassword") && (e.keyCode == 13 || e.which == 13)) {
        self.loginUser()
      }
    });
    // $('input').keydown(function (event) {
    //   // var self=this
    //   if (event.which === 13 && event.target.name == 'textSearch') {
    //     // Do something
    //     // Disable sending the related form
    //     // event.preventDefault();
    //     self.loginUser()
    //   }
    // });
  }

  closeOtherModalsFn() {
    $('#loginModal').modal('hide')
    this.showLogin = true
    this.showForgotPwd = false
    this.showForgotPwdMsg = false
    this.errorMsgVisible = false
  }

  closeModal() {
    document.getElementById('loginModal').click()
  }

  changeModalView(view) {
    if (view === 'forgotPassword') {
      this.showForgotPwd = true;
      this.showLogin = false;
      this.showForgotPwdMsg = false;
    } else if (view === 'forgotPwdMsg') {
      const data = {
        email: this.resetEmail
      };
      // console.log(data)
      this.loginService.passwordResetRequest(data).subscribe((res) => {
        this.resetEmail = undefined
        this.showForgotPwdMsg = true;
        this.showForgotPwd = false;
        this.showLogin = false;
      }, err => {
        this.showForgotPwdMsg = true;
        this.showForgotPwd = false;
        this.showLogin = false;
      });
    }
  }

  loginUser() {
    const data = {
      email: this.userEmail,
      password: this.password
    }

    if (data.email && data.password) {
      this.loginService.loginUser(data).subscribe((res: any) => {
        // console.log(res.json())
        this.userEmail = undefined
        this.password = undefined
        // this._data.postLoggedInUserDetailsFn('Helo')

        const token = JSON.parse(res._body)
        window.localStorage.setItem('access_token', token.token)
        $('#loginModal').modal('hide')
        this.router.navigate(['/user/allProducts'])
      },
        err => {
          const errmsg = JSON.parse(err._body)
          // console.log(errmsg)

          if (errmsg.code == 100) this.errorMsg = 'Email is not valid'
          else this.errorMsg = 'Your credentials are wrong'
          this.errorMsgVisible = true
        })
    } else this.errorMsgVisible = true
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  goToSignup() {
    $('#loginModal').modal('hide')
    $('#signupModal').modal('show')
  }

} // Main Closing Braces
