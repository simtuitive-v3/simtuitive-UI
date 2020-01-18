import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Config } from '../config'

@Injectable({
  providedIn: 'root'
})

export class FormsService {

  ConfigURL = new Config().apiUrl

  constructor(private http: Http) { }

  createDemoReqForm(obj, type: string) {

    let gotoAPI: string

    if (type == 'Business') gotoAPI = 'business'
    else if (type == 'Institution') gotoAPI = 'institution'
    else gotoAPI = 'partner'

    return this.http.post(`${this.ConfigURL}/portal/demo-request/${gotoAPI}`, obj)
  }

  verifyCaptchaToken(data) {
    return this.http.post(`${this.ConfigURL}/auth/verifyCaptchaToken`, data);
  }

} // Main Closing Braces
