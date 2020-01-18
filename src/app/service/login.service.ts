import { Injectable } from '@angular/core';
import { Config } from "../config";
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  configUrl = new Config().apiUrl

  constructor(private http: Http) { }

  createUser(data) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: myHeaders });
    return this.http.post(this.configUrl + '/auth/register', data)
  }

  loginUser(data){
    return this.http.post(this.configUrl + '/auth/login',data)
  }

  passwordResetRequest(data) {
    return this.http.post(this.configUrl + '/auth/password-reset-request', data)
  }

  forgotPassword(data){
    return this.http.post(this.configUrl + '/auth/reset-password', data)
  }

  verifyGoogleToken(data){
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: myHeaders });
    return this.http.post(this.configUrl + '/auth/verifyGoogleToken', data, {headers: myHeaders})
  }
}
